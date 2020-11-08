import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import { Button, Table } from "react-bootstrap";
import GetReservations from '../../actions/GetReservations';
import { Link } from 'react-router-dom';
import EditReservation from '../../actions/EditReservation';
class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      reservation:{

      }, 
      pageNum: 0,
      totalPages: 1 
    };
  }

  componentDidMount() {
    this.getReservations();
  }
  getReservations(page = null) {   
this.props.getReservations();
  }

cancelReservation(reservationId){
 let reservation= this.props.reservations.find((reservation)=>
        reservation.id==reservationId
    )
    reservation.resStatus="CANCELED";
    this.props.editReservation(reservation);
}
  render() {
    return (
      <div>
        <h1>Reservations</h1>
        <Table bordered striped>
          <thead>
            <tr>
              <th>Chexk In</th>
              <th>Nights</th>
              <th>Total Price</th>
              <th>Reservation Status</th>
             
            </tr>
          </thead>
          <tbody>
            {this.props.reservations.map((reservation) => {
              return (
                <tr
                  onClick={() => {
                    this.setState({ selectedReservationId: reservation.id });
                  }}
                  
                ><Link to={`/reservation/edit/${reservation.id}`}>
                  <td>{reservation.checkIn}</td>
                  </Link>
                  <td>{reservation.nights}</td>
                  <td>{reservation.totalPrice}</td>
                  <td>{reservation.resStatus}</td>
                  <td>
                  <Button key={reservation.id} onClick={()=>this.cancelReservation(reservation.id)}>Cancel</Button>
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
      return { reservations: state.reservationsList,
      
       };
    };
    
    export default connect(mapStateToProps, {
      getReservations: GetReservations,
     editReservation:EditReservation
    })(Reservations);

