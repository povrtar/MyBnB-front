import axios from "axios";

export const RestBnB = axios.create({
    baseURL:'http://localhost:8081/api'
});

export const GetAllApartmentsApi = async (config) => {
    console.log(config);
    try {
        let response = await RestBnB.get('/apartments',config);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}
export const GetApartmentApi = async (id) => {
    try {
        let response = await RestBnB.get('/apartments/'+id);
        console.log(response.data);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return null;
    }
}
export const GetAllAmenitiesApi = async (config) => {
    console.log(config);
    try {
        let response = await RestBnB.get('/amenities',config);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}
export const GetAllStatusesApi = async (config) => {
    console.log(config);
    try {
        let response = await RestBnB.get('/statuses',config);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}
export const AddApartmentApi = async (apartment) => {
   
    try {
        let response = await RestBnB.post('/apartments',apartment);
        console.log('kroz api');
        console.log(response.date);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}
export const EditApartmentApi = async (id,ime,date) => {
    let  config={
    id,
    ime,
    date
    }
      try {
          let response = await RestBnB.put('/apartments/'+id,config);
          return response.data;
  
      }
      catch (err) {
          console.log(err);
          return [];
      }
  }
  export const SetApartmentAmenitiesApi = async (props) => {
    
      try {
          let response = await RestBnB.put('/apartments/'+props.id,props.amenities);
          return response.data;
  
      }
      catch (err) {
          console.log(err);
          return [];
      }
  }
  export const DeleteApartmentApi = async (id) => {
    
      try {
          let response = await RestBnB.delete('/apartments/'+id);
          return response.data;
      }
      catch (err) {
          console.log(err);
          return [];
      }
  }
  export const GetAllReservationsApi = async (config) => {
  
    try {
        let response = await RestBnB.get('/reservations',config);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}
  export const AddReservationApi = async (reservation) => {
   
    try {
        let response = await RestBnB.post('/reservations',reservation);
        return response.data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}