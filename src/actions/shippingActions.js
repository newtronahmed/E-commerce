import {FetchCountries,GetToken,SetShippingCountry,SetShippingSubdivision,FetchShippingSubdivisions, FetchShippingOptions, SetShippingOption,RefreshCart,SetIncomingOrder, SetShippingData , SetErrorMessage} from './types'
import commerce from '../lib/commerce'
export const getToken=(cart)=> async(dispatch)=>{
    try {
        console.log('cart' , cart)
        const token = await commerce.checkout.generateToken(cart.id,{type:'cart'})
        dispatch({type:GetToken,payload:token})
    } catch (error) {
        console.log(error)
    }
}
export const fetchCountries = ( checkoutId) => async (dispatch) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutId.id)
    dispatch({type:FetchCountries, payload: countries})
}
export const setShippingCountry = (value)=> (dispatch)=>{
    dispatch({type:SetShippingCountry,payload: value})
}
export const fetchShippingSubdivisions = (countryCode) => async(dispatch) =>{
    const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
    dispatch({type:FetchShippingSubdivisions, payload:subdivisions})
}
export const setShippingSubdivision = (value) => (dispatch) =>{
    dispatch({type:SetShippingSubdivision, payload:value})
}

export const fetShippingOptions = (tokenId,country,region=null) => async(dispatch)=>{
    
    const options = await commerce.checkout.getShippingOptions(tokenId,{country,region})
    // console.log('options' , options)
    dispatch({type:FetchShippingOptions,payload:options})
}
export const setShippingOption = (value)=>(dispatch)=>{
    console.log('set shipping option')
    dispatch({type:SetShippingOption,payload:value})
}
export const setShippingData = (data)=>{
    return {
        type: SetShippingData,
        payload:data,
    }
}
export const handleCheckout = (token, orderData) => async (dispatch) =>{
    try {
        const incomingorder = await commerce.checkout.capture(token,orderData)
        dispatch({type:SetIncomingOrder, payload: incomingorder})
    } catch (error) {

        // dispatch({type:SetErrorMessage,payload: error.response.data.error.message})
        console.log(error)
    }
    try {
        const freshorder = await commerce.cart.refresh()
        dispatch({type:RefreshCart,payload:freshorder})
    }catch (error) {
        console.log(error)
    }
    
    

}