const reservationListReducer = function (reservations = [], action) {
    switch (action.type) {
      case"GET_RESERVATIONS":
      return action.payload;
        case "ADD_RESERVATION":
          return [...reservations,action.reservation];
       
          case 'EDIT_RESERVATION':
            return reservations.map((reservation) => {
              if (reservation.id === action.id) {
                return {
                  ...action.reservation
                };
              } else {
                return reservation;
              };
            });
      default:
        return reservations;
    }
  };
  
  export default reservationListReducer;
  