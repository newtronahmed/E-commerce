import {FetchCart, AddToCart,UpdateCart,RemoveCartProduct,EmptyCart} from './types'
import commerce from '../lib/commerce'
export const fetchCart = ()=>async (dispatch)=>{
    const response = await commerce.cart.retrieve()
    dispatch({type:FetchCart,payload:response})
}

export const addToCart = (productId,quantity)=> async (dispatch) =>{
   
    const item = await commerce.cart.add(productId,quantity)
    // console.log('add', item.cart)
    dispatch({type:AddToCart,payload:item.cart})
}
export const updateCartQuantity = (productId,quantity) => async (dispatch) =>{
    const response = await commerce.cart.update(productId,{quantity})
    dispatch({type:UpdateCart, payload:response.cart})
}
export const removeCartProduct = (productId) => async (dispatch)=>{
    const response = await commerce.cart.remove(productId)
    dispatch({type:RemoveCartProduct,payload:response.cart})
}
export const emptyCart = () => async (dispatch) =>{
    const response = await commerce.cart.empty()
    // const response = await commerce.cart.refresh()
    
    dispatch({type:EmptyCart,payload: response.cart })
}