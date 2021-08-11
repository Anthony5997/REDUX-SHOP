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
    console.log(state);
    switch (type) {

        case ActionTypes.ADD_TO_CARD:
            newState =  state.concat([payload])
            console.log(newState);
            return newState
            break;
        case ActionTypes.REMOVE_FROM_CARD:
             newState = payload
            console.log(newState);
            return newState
            break;  

        default:
            return state
            break;
    }
}