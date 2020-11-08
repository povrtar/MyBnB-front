import React from 'react';
import { Table } from "react-bootstrap";
import {GetApartmentApi} from '../../apis/RestBnB';
import AddReservationPage from '../reservations/AddReservationPage';
class  ApartmentPage extends React.Component{
    constructor (props){
      super(props);
        this.state={
          apartment:{
            id: 2,
            type: '',
            numberOfRooms: 0,
            numberOfGuests :0,
            locationId: 2,
            availability: [],
            hostId: 2,
            reservationDto:[],
            pricePerNight: 30.0,
            status: '',
            amenities: [],
            checkIn: '',
            checkOut: ''
           
        }
          
    }
    console.log(this.state.apartment);
}
    componentDidMount(){
this.getApartment(this.props.match.params.id);

    }
    getApartment(id){
       GetApartmentApi(id).then((apartment)=>{
        console.log(apartment);
        this.setState({apartment});

      })
    
    }
   
    render(){
        return(
  <div>
    <h1> Apartment</h1>
    <Table bordered striped>
          <thead>
            <tr>
              <th>Type</th>
              <th>Number of Rooms</th>
              <th>Number of Guests</th>
              <th>Price per Night</th>
              <th>Check In</th>
              <th>Check Out</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
           
                <tr>
                  <td>{this.state.apartment.type}</td>
                  <td>{this.state.apartment.numberOfRooms}</td>
                  <td>{this.state.apartment.numberOfGuests}</td>
                  <td>{this.state.apartment.pricePerNight}</td>
                  <td>{this.state.apartment.checkIn}</td>
                  <td>{this.state.apartment.checkOut}</td>
                
                </tr>           
          </tbody>
        </Table>
      <AddReservationPage history={this.props.history} apartment={this.state.apartment}/>
  </div>
);

}
}
export default ApartmentPage
  

