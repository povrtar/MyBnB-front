import React from 'react';
import { connect } from 'react-redux';
import ApartmentForm from './ApartmentForm';
import  AddApartment  from '../../actions/AddApartment';

const AddApartmentPage = (props) => (
  <div>
    <h1>Add Apartment</h1>
    <ApartmentForm
      onSubmit={(apartment) => {
        console.log(apartment);
        props.dispatch(AddApartment(apartment));
        props.history.push('/apartments');
      }}
    />
  </div>
);

export default connect()(AddApartmentPage);
