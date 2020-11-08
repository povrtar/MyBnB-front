const amenitiesListReducer = function (amenities = [], action) {
    switch (action.type) {
      case "GET_AMENITIES":
        return action.payload;
        case "ADD_AMENITY":
          return [...amenities,action.apartment];
          case "EDIT_AMENITY":
            return amenities.map((amenity)=>{
              if(amenity.id===action.id){
                return {
                  ...amenities,
                  ...action.amenity
                }
              }else{
                return {amenity}
              }
            }
            );
            case "DELETE_AMENITY":{
              console.log('iz reducera delete '+action.id)
              return amenities.filter(({ id }) => id !== action.id);
            }
      default:
        return amenities;
    }
  };
  
  export default amenitiesListReducer;
  