import { GetAllAmenitiesApi } from "../apis/RestBnB";

let GetAmenities= function () {
  
 
  return async function (dispatch, getState) {
    try{
      console.log('kroz akciju');
        let amenities = await GetAllAmenitiesApi();
        dispatch({ type: "GET_AMENITIES", payload: amenities });
        console.log("Prolazi kroz GetAmenities");
    }catch(error){
        dispatch({ type: "GET_AMENITIES", payload: [] }); 
    }
  };
  
};

export default GetAmenities;
