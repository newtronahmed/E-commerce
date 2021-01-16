import {FetchProducts} from '../actions/types'
const initialState = {
    items: [],
}
export default function productsReducer (state=initialState,action){
    switch (action.type) {
        case FetchProducts:
            console.log('reducer')
            return {
                ...state,items:action.payload
            }
    
        default:
            return state;
    }
}