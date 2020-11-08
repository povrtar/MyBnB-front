import React from 'react';
import { connect } from 'react-redux';
import ApartmentForm from './ApartmentForm';
import  AddApartment  from '../../actions/AddApartment';
import GetApartments from '../../actions/GetApartments';
const EditApartmentPage = (props) => (
  <div>
    <h1>Edit Apartment</h1>
    <ApartmentForm apartment={props.apartment}
      onSubmit={(apartment) => {
        console.log(apartment);
        props.dispatch(AddApartment(apartment));
        props.history.push('/apartments');
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  
  return {
    apartment: state.apartmentsList.find((apartment) => apartment.id == props.match.params.id)
  };
};

export default connect(mapStateToProps,
  { getApartments: GetApartments})(EditApartmentPage);

