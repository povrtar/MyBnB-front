import { GetAllStatusesApi } from "../apis/RestBnB";

let GetStatuses = function (props){
  return async function (dispatch, getState) {
    try{
        let statuses = await GetAllStatusesApi(props);
        dispatch({ type: "GET_STATUSES", payload: statuses });

    }catch(error){
        dispatch({ type: "GET_STATUSES", payload: [] }); 
    }
  };
  
};

export default GetStatuses;
