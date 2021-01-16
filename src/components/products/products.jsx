import {Grid }from '@material-ui/core'
import {connect} from 'react-redux'
import React ,{useState, useEffect} from 'react'

import {fetchProducts} from '../../actions/productActions'


import Product from './product'
import useStyles from './style'
import { fetchCart, addToCart } from '../../actions/cartActions'
// const productsList = [
//     {
//         id:1,
//         name:'shoes',
//         description:' Lorem ipsum dolor sit amet consectetur adipi',
//         price:'5'
//     },
//     {
//         id:2,
//         name:'iron',
//         description:' Lorem ipsum dolor sit amet consectetur adipi',
//         price:'10'
//     },
//     {
//         id:3,
//         name:'iron',
//         description:' Lorem ipsum dolor sit amet consectetur adipi',
//         price:'10'
//     },
// ]

const Products = ({products,fetchProducts,fetchCart,cart,addToCart}) => {
    
    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[fetchCart])
    // console.log(cart)
    const classes=useStyles()
    return (
        <div className={classes.mainContent} >
            <div className={classes.toolbar} />
            <Grid container spacing={4}>
                {

                    products.map(each=>{
                        return (<Grid item key={each.id} xs={12} sm={6} md={4} lg={3} >
                            <Product product={each} addToCart={addToCart} />
                        </Grid>)
                    })
                }
            </Grid>
        </div>
    )
}
const mapStateToProps = (state)=>({
    products: state.products.items,
    cart: state.cart.items
})

export default connect(mapStateToProps,{fetchProducts,fetchCart,addToCart})(Products)
