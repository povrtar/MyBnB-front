import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import { Table, Button, Form, ButtonGroup } from "react-bootstrap";
import GetApartments from '../../actions/GetApartments'

import { Link } from 'react-router-dom';
import {RestBnB} from '../../apis/RestBnB'
//TODO: Odraditi pretragu i paginaciju
class Apartments extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      apartments: [], 
      selectedRecordId: -1, 
      search:{city: "", minPrice: 0,maxPrice:0,minRooms:0,maxRooms:0,minPersons:0,maxPersons:0, },
      pageNum: 0,
      totalPages: 1 
    };
  }

  componentDidMount() {
    this.getApartments();
  }

  //#region API calls

  getApartments(page = null) {
    let config = {params:{}};
    if(this.state.search.city !== ''){
      config.params.city = this.state.search.city;
    }
    if(this.state.search.minPrice !== 0){
      config.params.priceFrom = this.state.search.minPrice;
    }
    if(this.state.search.maxPrice !== 0){
      config.params.priceTo = this.state.search.maxPrice;
    }
    if(this.state.search.minRooms !== 0){
      config.params.numberOfRoomsMin = this.state.search.minRooms;
    }
    if(this.state.search.maxRooms !== 0){
      config.params.numberOfRoomsMax = this.state.search.maxRooms;
    }
    if(this.state.search.minPersons !== 0){
      config.params.minPersons = this.state.search.minPersons;
    }
    if(this.state.search.maxPersons !== 0){
      config.params.maxPersons = this.state.search.maxPersons;
    }
    if(page != null){
      config.params.pageNum = page;
    }
    else{
      config.params.pageNum = this.state.pageNum;
    }
    
this.props.getApartments(config);
   
/*
    RestBnB.get("/apartments", config)
      .then((res) => {
        this.setState({ apartments: res.data, totalPages: res.headers["total-pages"] });
        console.log(this.state.apartments);
      })
      .catch((res) => {
        alert("Error occured please try again!");
      });
      */
  }

 


  valueInputChange(event){
    let control = event.target;

    let name = control.name;
    let value = control.value;

    let search = this.state.search;
    search[name] = value;

    this.setState({search: search});
  }

  doSearch(){
    this.setState({totalPages:1, pageNum: 0});
    console.log('kroz do search');
    this.getApartments(0);
  }

  changePage(direction){
    let page = this.state.pageNum + direction;  
    this.getApartments(page);
    this.setState({pageNum:page});
    //this.setState({pageNum: page}, this.getRecords);
  }


  //#endregion

  render() {
    return (
      <div>
        <h1>Apartments</h1>

        <div style={{ marginBottom: "10px" }}>
        <Link to={`apartments/add`}>
          <Button
            
          >
            Add
          </Button>
          </Link>
        </div>

        <Form>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control value={this.state.search.city} name="city" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimum Price</Form.Label>
              <Form.Control value={this.state.search.minPrice} name="minPrice" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
            </Form.Group>
           
            <Form.Group>
            <Form.Label>Maximum Price</Form.Label>
            <Form.Control value={this.state.search.maxPrice} name="maxPrice" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
          </Form.Group>
          
          <Form.Group>
          <Form.Label>Minimum Rooms</Form.Label>
          <Form.Control value={this.state.search.minRooms} name="minRooms" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
        </Form.Group>
        
        <Form.Group>
        <Form.Label>Maximum Rooms</Form.Label>
        <Form.Control value={this.state.search.maxRooms} name="maxRooms" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
      </Form.Group>
      
      <Form.Group>
      <Form.Label>Minimum Persons</Form.Label>
      <Form.Control value={this.state.search.minPersoms} name="minPersons" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
    </Form.Group>
   
    <Form.Group>
    <Form.Label>MaximumPersons</Form.Label>
    <Form.Control value={this.state.search.maxPersons} name="maxPersons" as="input" onChange={(e)=>this.valueInputChange(e)}></Form.Control>
  </Form.Group>
  
             
            <Button onClick={()=>this.doSearch()}>Search</Button>
        </Form>

        <ButtonGroup>
          <Button disabled={this.state.pageNum == 0} onClick={()=>this.changePage(-1)}>Previous</Button>
          <Button disabled={this.state.pageNum + 1 == this.state.totalPages} onClick={()=>this.changePage(1)}>Next</Button>
        </ButtonGroup>

        <Table bordered striped>
          <thead>
            <tr>
              <th>Type</th>
              <th>Number of Rooms</th>
              <th>Max number of guests</th>
              <th>Price per Night</th>
             
            </tr>
          </thead>
          <tbody>
            {this.props.apartments.map((apartment) => {
              return (
                <tr
                  onClick={() => {
                    this.setState({ selectedApartmentId: apartment.id });
                  }}
                  key={apartment.id}
                ><Link to={`/apartment/${apartment.id}`}>
                  <td>{apartment.type}</td>
                  </Link>
                  <td>{apartment.numberOfRooms}</td>
                  <td>{apartment.numberOfGuests}</td>
                  <td>{apartment.pricePerNight}</td>
                  <td>
                  
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  
          }}
    const mapStateToProps = (state,props) => {
      console.log(state);
      return { apartments: state.apartmentsList
       };
    };
    
    export default connect(mapStateToProps, {
      getApartments: GetApartments,
     
    })(Apartments);

