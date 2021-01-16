import React from 'react'
import {Typography, Divider, Button} from '@material-ui/core'
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {useSelector,useDispatch} from 'react-redux'

import Review from './review'
import { handleCheckout } from '../../../../actions/shippingActions'

const PaymentForm = ({setActiveStep, timeout}) => {
   const token = useSelector(state => state.shipping.token)
   const shippingData = useSelector(state=>state.shipping.shippingData)
   const dispatch = useDispatch()
   
   
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
 const handleSubmit =async (e,elements,stripe) =>{
    e.preventDefault()
    if(!stripe|| !elements) return 
    const cardElement = elements.getElement(CardElement)
    const {error, paymentMethod} = await stripe.createPaymentMethod({type:'card' , card:cardElement})
    if(error) {
console.log(error)
    }else {
        const orderData= {
            line_items: token.live.line_items,
            customer: {firstname: shippingData.firstname, lastname: shippingData.lastname, email:shippingData.email, },
            shipping: {
                name:'Primary',
                street:shippingData.address,
                town_city: shippingData.city,
                county_state:shippingData.subdivision,
                country: shippingData.country,
                postal_zip_code: shippingData.zipcode

            },
            fulfillment: {shipping_method: shippingData.shippingOption},
            payment: {
                gateway: 'stripe',
                stripe:{
                    payment_method: paymentMethod.id,
                }
            }
        }
        dispatch(handleCheckout(token.id,orderData))
        timeout()
        setActiveStep(prev=>prev+1)
        
    }
 }   
return (
        <>
           <Review />
            <Divider></Divider>
            <Typography variant='h6' gutterBottom>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {
                        ({elements,stripe})=>(
                            <form onSubmit={(e)=>handleSubmit(e,elements, stripe)} >
                                <CardElement />
                                <br />
                                <div className="flex justify-between">
                                    <Button variant='outlined' onClick={()=>setActiveStep(prev=>prev - 1)}>BAck</Button>
                                    <Button variant='contained' type='submit' disabled={!stripe}>Pay{token.live.subtotal.formatted_with_symbol}</Button>
                                </div>
                            </form>
                        )
                    }
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
