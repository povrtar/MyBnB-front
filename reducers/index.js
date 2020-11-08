import {combineReducers} from "redux";
import ApartmentsListReducer from "./ApartmentsListReducer";
import AmenityListReducer from './AmenityListReducer'
import ReservationListReducer from './ReservationListReducer';
import ApartmentReducer from "./ApartmentReducer";
export default combineReducers({
    apartmentsList: ApartmentsListReducer,
    amenitiesList:AmenityListReducer,
    reservationsList:ReservationListReducer,
    apartment:ApartmentReducer
})