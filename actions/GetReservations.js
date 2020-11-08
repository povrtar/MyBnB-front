import { GetAllReservationsApi } from "../apis/RestBnB";

let GetReservations = function (props) {
  
  return async function (dispatch, getState) {
    try{
        let reservations = await GetAllReservationsApi(props);
        console.log(reservations);
        dispatch({ type: "GET_RESERVATIONS", payload: reservations });
    }catch(error){
        dispatch({ type: "GET_RESERVATIONS", payload: [] }); 
    }
  };
  
};

export default GetReservations;
