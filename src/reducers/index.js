import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import shippingReducer from './shippingReducer'
export  default  combineReducers({
    products: productsReducer,
    cart : cartReducer,
    shipping: shippingReducer,
})