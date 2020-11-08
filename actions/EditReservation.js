import { AddReservationApi } from "../apis/RestBnB";

let EditReservation = function (props) {
  
  console.log(props);
  return async function (dispatch, getState) {
    try{
      console.log('throw reservation action');
        let reservation = await AddReservationApi(props);
        dispatch({ type: "EDIT_RESERVATION",reservation});
    }catch(error){
        dispatch({ type: "EDIT_RESERVATION",payload:[] }); 
    }
  };
  
};

export default EditReservation;
