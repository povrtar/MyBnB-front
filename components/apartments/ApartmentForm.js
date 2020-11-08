import React from 'react';
import {connect} from 'react-redux';
import { Table, Button, Form, ButtonGroup, FormGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import CheckBox from '../CheckBox';
import GetAmenities from '../../actions/GetAmenities';
import { AddApartmentApi } from '../../apis/RestBnB';
import AddAmenities from '../amenities/AmenitiesForm';
const OPTIONS=['Apartment',"Room"]
 class ApartmentForm extends React.Component {
  constructor(props) {
    console.log(props.apartment);
    super(props);
  this.state = {
    types:OPTIONS,
    id:props.apartment? props.apartment.id:null,
    type:props.apartment?props.apartment.type:'',
    numberOfRooms:props.apartment?props.apartment.numberOfRooms:0,
    numberOfGuests:props.apartment?props.apartment.numberOfGuests:0,
    city:props.apartment?props.apartment.city:'',
    pricePerNight:props.apartment?props.apartment.pricePerNight:0,
    status:props.apartment?props.apartment.status:true,
    checkIn:props.apartment?props.apartment.checkIn:'2 PM',
    checkOut:props.apartment?props.apartment.checkOut:'10 AM',
    amenities:props.apartment?props.apartment.amenities:[],
    reservations:props.apartment?props.apartment.reservations:[],
  booked:[],
    checkboxes: props.amenities.reduce(
        (options, option) => ({
          ...options,
          [option]:false
        }),
        {}
      )
    }
  }

  valueInputChange = (e) => {
    const name=e.target.name;
    const value = e.target.value;
    let state=this.state;
    state[name]=value;
    this.setState({state});
  };
  selectInputChange = (e) => {
    const value = e.target.value;
    let state=this.state;
    state['type']=value;
    this.setState({state});
  };
  
  componentDidMount() {
    this.getData();
    this.selectAmenities();
   
  }
  getData(){
    this.props.getAmenities(); 
    this.selectAvailability();
    console.log(this.state.booked);
  }
  selectAvailability(){
    this.state.reservations.map((item)=>{
let booked =[];
var i;
for(i=0;i<item.nights;i++){
 let date=item.checkIn;
 date=date+i;
  booked=[...booked,date]
}
this.setState({booked})
    });
  }
  selectAmenities=()=>{
    let checkboxes=this.state.checkboxes;
    this.props.amenities.map((item) =>{ 
     this.setState({checkboxes:{...checkboxes,[item.name]:true}});
    });
    

    
  }
  submitForm = (e) => {
    
    e.preventDefault();

    if (!this.state.type || !this.state.numberOfRooms||!this.state.numberOfGuests) {
      this.setState(() => ({ error: 'Please provide all fields for Apartment.' }));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('kroz onSubmit else');
      this.props.onSubmit({
      id:this.state.id,
        type: this.state.type,
        numberOfRooms: this.state.numberOfRooms,
        numberOfGuests:this.state.numberOfGuests,
       locationId:1,
      amenities:this.state.amenities,
        pricePerNight:this.state.pricePerNight,
        status:this.state.status,
        checkIn:this.state.checkIn,
        checkOut:this.state.checkOut       
      });
}
  }
 
  handleFormSubmit = (e) => {
    e.preventDefault();
    
    let amenities=[];
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
         let amenity=(this.props.amenities).find((amenity)=>{return (amenity.name==checkbox)});
        amenities.push(amenity);
    
      });
      this.setState({amenities});
  }
  
  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
     
    }));

  };
  createCheckbox = option => (
    <CheckBox
      label={option}
      checked={this.state.checkboxes[option]}
      onCheckboxChange={(e)=>this.handleCheckboxChange(e)}
      key={option}
      defaultChecked={this.state.checkboxes[option]}
    />
  );

  createCheckboxes = () => 
    this.props.amenities.map(this.createCheckbox);
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
       
        <Form >
            <Form.Group >
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={this.state.type} name="type"  onChange={(e)=>this.selectInputChange(e)}>
          <option selected={this.state.type}>{this.state.type}</option>
              {
                this.state.types.map((type) => {
                  return (
                    <option value={type} >{type}</option>
                  )
                })
              }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Number Of Rooms</Form.Label>
              <Form.Control  type="number" value={this.state.numberOfRooms} name="numberOfRooms" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximum guests per apartment</Form.Label>
              <Form.Control type="number" value={this.state.numberOfGuests} name="numberOfGuests" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control  value={this.state.city} name="city" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label>Price per Night</Form.Label>
          <Form.Control type="number" value={this.state.pricePerNight} name="pricePerNight" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Check In Time</Form.Label>
        <Form.Control value={this.state.checkIn} name="checkIn" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
      </Form.Group>
      <Form.Group>
              <Form.Label>CheckOut</Form.Label>
              <Form.Control  value={this.state.checkOut} name="checkOut" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
            <div>
            <form onSubmit={this.handleFormSubmit}>
           
           {this.createCheckboxes()}
                          <div className="form-group mt-2">
                          <button type="submit" className="btn btn-primary">
                          Save Amenities
                        </button>
                          </div>
                        </form>
            </div>
         
            <Button onClick={(e)=>this.submitForm(e)}>Submit Apartment Form</Button>
        
        
      
      </Form>
      
      </div>
    )
  }
}
const mapStateToProps = (state,props) => {
  console.log(state.amenities);
  return { amenities: state.amenitiesList
   };

  };
export default connect(mapStateToProps, {
  getAmenities: GetAmenities

})(ApartmentForm)