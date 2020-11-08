const apartmentsListReducer = function (apartments = [], action) {
    switch (action.type) {
      case "GET_APARTMENTS":
        return action.payload;
        case "ADD_APARTMENT":{
          console.log(action.apartment)
          return [...apartments,action.apartment];}
          case "EDIT_APARTMENT":
            return apartments.map((apartment)=>{
              if(apartment.id===action.id){
                return {
               
                }
              }else{
                return {apartment}
              }
            }
            );
            case "DELETE_APARTMENT":{
              console.log('iz reducera delete '+action.id)
              return apartments.filter(({ id }) => id !== action.id);
            }
      default:
        return apartments;
    }
  };
  
  export default apartmentsListReducer;
  