import React from 'react';
import {connect} from 'react-redux';
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddReservation from '../../actions/AddReservation';
const STATUSES=['CREATED','REJECTED','CANCELED','ACCEPTED','COMPLETED'];
 class AddReservationPage extends React.Component {
  constructor(props) {
    
    super(props);
   
  this.state = {
   statuses:STATUSES,
    apartmentId:props.apartment.id,
    resStatus:STATUSES[0],
    startDate:new Date(),
    numberOfNights:1
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
  onDateChange = (date) => {
    if (date) {
      let startDate=date;
      this.setState(() => ({ startDate }));
    }
  };
  
  submitForm = (e) => {
    
    e.preventDefault();

      let reservation={
          checkIn:this.state.startDate,
      apartmentId:this.props.apartment.id,
        resStatus:this.state.resStatus ,
        guestId:1,
        nights:this.state.numberOfNights    
      }
      console.log('throw submit')
      this.props.dispatch(AddReservation(reservation));
      this.props.history.push('/apartments');
    }
  
 
 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
       
        <Form >
        <DatePicker
       
        onChange={this.onDateChange}
        excludeDates={(this.props.apartment.availability.map((item)=>{
          console.log(item);
          return new Date(item);
        }))}
        minDate={new Date()}
        placeholderText="Book"
        />
           
            <Form.Group>
              <Form.Label>Number of Nights</Form.Label>
              <Form.Control  type="number" value={this.state.numberOfNights} name="numberOfNights" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={this.state.status} name="status"  onChange={(e)=>this.selectInputChange(e)}>
         
              {
                this.state.statuses.map((status) => {
                  return (
                    <option key={status}value={status} >{status}</option>
                  )
                })
              }
              </Form.Control>
            </Form.Group>
           
            <Button onClick={this.submitForm}>Submit Reservation</Button>
        
        
      
      </Form>
      
      </div>
    )
  }
}
export default connect()(AddReservationPage);
