import { combineReducers } from "redux";
import city from "../reducers/city";
import breweryDetails from "../reducers/breweryDetails";

export default combineReducers({
  city,
  breweryDetails,
});
