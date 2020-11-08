const ApartmentReducer = function (apartment=null, action) {
    switch (action.type) {
        case "GET_APARTMENT":
          return {apartment:action.apartment};
          
      default:
        return apartment;
    }
  };
  
  export default ApartmentReducer;
  