import { SetApartmentAmenitiesApi } from "../apis/RestBnB";

let SetAmenities = function (props) {
  
  console.log(props);
  return async function (dispatch, getState) {
    try{
    
      
        let apartment = await SetApartmentAmenitiesApi(props);
        dispatch({ type: "SET_AMENITIES", payload: apartment});
        console.log("Prolazi kroz SetAmenities");
    }catch(error){
        dispatch({ type: "SET_AMENITIES",payload:[] }); 
    }
  };
  
};

export default SetAmenities;
