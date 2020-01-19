import {combineReducers} from "redux";
import ApiReducer from "./ApiReducer";
import FilterReducer from "./FilterReducer";

export default combineReducers({
    api : ApiReducer,
    filter : FilterReducer
});
