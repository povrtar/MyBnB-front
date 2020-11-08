import { AddApartmentApi } from "../apis/RestBnB";

let AddApartment = function (props) {
  
  console.log(props);
  return async function (dispatch, getState) {
    try{
    
      console.log('kroz akciju');
        let apartment = await AddApartmentApi(props);
        console.log(apartment);
        console.log("Prolazi kroz AddApartments");
        dispatch({ type: "ADD_APARTMENT",apartment});
        console.log("Prolazi kroz AddApartments");
    }catch(error){
        dispatch({ type: "ADD_APARTMENT",payload:[] }); 
    }
  };
  
};

export default AddApartment;
