import { AddReservationApi } from "../apis/RestBnB";

let AddReservation = function (props) {
  
  console.log(props);
  return async function (dispatch, getState) {
    try{
      console.log('throw reservation action');
        let reservation = await AddReservationApi(props);
        dispatch({ type: "ADD_RESERVATION",reservation});
    }catch(error){
        dispatch({ type: "ADD_RESERVATION",payload:[] }); 
    }
  };
  
};

export default AddReservation;
