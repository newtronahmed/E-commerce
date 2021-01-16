import {FetchProducts} from './types'
import commerce from '../lib/commerce'

export const fetchProducts = () => async (dispatch)=>{
    const {data} = await commerce.products.list()
    
    const productsList = [
        {
            id:1,
            name:'shoes',
            description:' Lorem ipsum dolor sit amet consectetur adipi',
            price:'5'
        },
        {
            id:2,
            name:'iron',
            description:' Lorem ipsum dolor sit amet consectetur adipi',
            price:'10'
        },
        {
            id:3,
            name:'iron',
            description:' Lorem ipsum dolor sit amet consectetur adipi',
            price:'10'
        },
    ]
    
     
    dispatch({type:FetchProducts,payload:data})
}
