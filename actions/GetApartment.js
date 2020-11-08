import { GetAApartmentApi } from "../apis/RestBnB";

let GetApartment = function (props) {  
  console.log(props);
  return async function (dispatch, getState) {
    try{
        let apartment = await GetAApartmentApi(props);
        dispatch({ type: "GET_APARTMENTS", payload: apartment });
    }catch(error){
        dispatch({ type: "GET_APARTMENTS", payload: [] }); 
    }
  };
  
};

export default GetApartment;
