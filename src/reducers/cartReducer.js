import {FetchCart, AddToCart, UpdateCart, RemoveCartProduct, EmptyCart, RefreshCart} from '../actions/types'
const initialState = {
    items: {},
}
export  default function cartReducer (state=initialState,action){
    switch (action.type) {
        case FetchCart:
            return {
                ...state,items:action.payload,
            }
        case AddToCart:
            return {
                ...state,items:action.payload,
            }
        case UpdateCart:
            return {
                ...state,items:action.payload
            }

        case RemoveCartProduct:
            return {
                ...state,items:action.payload
            }
        case EmptyCart:
            return {
                ...state,items:action.payload
            }
        case RefreshCart: 
        return {
            ...state,items:action.payload
        }
        default:
            return state;
    }
}