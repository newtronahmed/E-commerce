import React from 'react'
import {Typography, Divider, Button, CircularProgress } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Confirmation = ({isFinished}) => {
    const order = useSelector(state => state.shipping.order)
    const error = useSelector(state => state.shipping.error)
    // console.log(isFinished)
    
        if(isFinished) {
            return (
            <>
                <div>
                    <Typography variant='h5'>Thank you for making a purchase </Typography>
                        <Divider />
                    <Typography>Order ref: ref</Typography>
                </div>
                <br></br>
                <Button variant='outlined' component={Link} to='/'  >Back to home</Button>
            </>
            )
        } else if(!order.costumer){
            return (
                <div className='text-center'>
                    <CircularProgress />
                </div>
            )
        }
    if(error) {
        return (
            <>
            <Typography variant='body1' color='secondary' >There was an order while processing the order</Typography>
                <Typography variant='body1' color='secondary' >{error}</Typography>
            </>
        )
    }
    return (
        <>
        <div>
    <Typography variant='h5'>Thank you for making a purchase {order.customer.firstname}</Typography>
            <Divider />
            <Typography>Order ref: ref</Typography>
        </div>
        <br></br>
            <Button variant='outlined' component={Link} to='/'  >Back to home</Button>
        </>
    )
}

export default Confirmation
