import { ActionTypes } from "../costants/actionTypes"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    }
}

export const initCardProduct = (product) => {
    return {
        type : ActionTypes.INIT_CARD,
        payload: product
    }
}

export const addToCardProduct = (product) => {
    return {
        type : ActionTypes.ADD_TO_CARD,
        payload: product
    }
}

export const updateCardProduct = (product) => {
    return {
        type : ActionTypes.UPDATE_CARD,
        payload: product
        
    }
}

export const removeFromCardProduct = (product) => {
    return {
        type : ActionTypes.REMOVE_FROM_CARD,
        payload: product
    }
}
