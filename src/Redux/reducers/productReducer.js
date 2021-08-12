import { ActionTypes } from "../costants/actionTypes";

const initialState = {
    products : {},
    card : []
};

export const productReducer = (state = initialState.products, {type , payload}) => {

    let newState;
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            newState = payload
            return newState
            break;
            
        default:
            return state
            break;
    }
}


export const addToCardReducer = (state = initialState.card, {type , payload}) => {
    let newState;
    switch (type) {

        case ActionTypes.INIT_CARD:
            newState = payload
           return newState
           break;
        case ActionTypes.UPDATE_CARD:
            console.log("payload du update : ", payload);
            newState ={ payload, quantity: state.quantity+ 1}
           return newState
           break;
        case ActionTypes.ADD_TO_CARD:
            console.log("payload dans add : ", payload);
            newState =  state.concat([payload])
            return newState
            break;
        case ActionTypes.REMOVE_FROM_CARD:
             newState = payload
            return newState
            break;  

        default:
            return state
            break;
    }
}