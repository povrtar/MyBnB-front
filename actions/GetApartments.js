
import { GetAllApartmentsApi } from "../apis/RestBnB";

let GetApartments = function (props){
  return async function (dispatch, getState) {
    try{
        let apartments = await GetAllApartmentsApi(props);
        dispatch({ type: "GET_APARTMENTS", payload: apartments });
        console.log("Prolazi kroz GetApartments");
    }catch(error){
        dispatch({ type: "GET_APARTMENTS", payload: [] }); 
    }
  };
  
};

export default GetApartments;
