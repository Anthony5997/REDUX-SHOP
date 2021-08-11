import { combineReducers } from "redux";
import { productReducer, addToCardReducer } from "./productReducer";

 const reducers = combineReducers({
    
    products : productReducer,
    card : addToCardReducer,
})

export default reducers;