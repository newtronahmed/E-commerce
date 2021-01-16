import { GetToken,FetchCountries,SetShippingCountry, SetShippingSubdivision, FetchShippingSubdivisions, FetchShippingOptions, SetShippingOption, SetShippingData, SetIncomingOrder, SetErrorMessage } from "../actions/types";

 const initialState = {
    shippingCountrys: [],
    shippingCountry: '',
    shippingOptions:[],
    shippingOption:'',
    shippingSubdivisions:[],
    shippingSubdivision:'',
    token: '',
    shippingData:{},
    order:{},
    error:''
   
}
export default function shippingReducer (state=initialState,action) {
    switch (action.type) {
        case GetToken:
            return {
                ...state,token:action.payload
            }
        case FetchCountries:
            return {
                ...state,shippingCountrys:action.payload, shippingCountry: Object.keys(action.payload)[0],
            }
        case SetShippingCountry:
            return {
                ...state,shippingCountry:action.payload,
            }
        case SetShippingSubdivision:
            return {
                ...state,shippingSubdivision:action.payload
            }
        case FetchShippingSubdivisions:
            return {
                ...state,shippingSubdivisions:action.payload,shippingSubdivision:Object.keys(action.payload)[0],
            }
        case FetchShippingOptions :
            let options = action.payload
            // console.log(options , 'options in reduer')
            return {
                ...state,shippingOptions: action.payload, shippingOption:options[0].id
            }
        case SetShippingOption:
            return {
                ...state,shippingOption:action.payload,
            }
        case SetShippingData:
            return {
                ...state,shippingData:action.payload,
            }
        case SetIncomingOrder:
            return {
                ...state,order:action.payload,
            }
        case SetErrorMessage:
            return {
                ...state,error:action.payload
            }
    
        default:
           return  state;
    }
}