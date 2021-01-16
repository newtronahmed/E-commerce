import React,{useState, useEffect} from 'react'
import {Paper , Stepper , Step , StepLabel, CircularProgress, Button, Typography} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import AddressForm  from  './addressform'
import PaymentForm from './paymentform'
import Confirmation from './confirmation'
import useStyles from './style'
import { getToken } from '../../../actions/shippingActions'
import { fetchCart } from '../../../actions/cartActions'
const steps = ['shipping details', 'payment details']
const Checkout = () => {
  
    const [activeStep,setActiveStep] = useState(0)
    const [isFinished, setFinished] = useState(false)
    const classes = useStyles()
    const history = useHistory()
    const token = useSelector(state => state.shipping.token)
    const cart = useSelector(state=>state.cart.items)
    const dispatch = useDispatch()
    const timeout= () => {
        setTimeout(() => {
            setFinished(true)
            console.log('should set to true')
        }, 3000);
    }

    useEffect(()=>{
        console.log(cart.id)
           try {
              dispatch(getToken(cart))
           } catch (error) {
               history.pushState('/')
           }
    
    },[cart.id])
    
    const Form = ({setActiveStep,timeout}) =>{

       return  activeStep === 0 ? <AddressForm token={token} setActiveStep={setActiveStep} /> : <PaymentForm setActiveStep={setActiveStep} timeout={timeout} />
    }
    return (
        <>
        <div className={classes.toolbar} />
        <main className='flex md:justify-center'  >
           <Paper className={classes.paper} >
               <Typography align='center' variant='h4'>Checkout</Typography>
               <Stepper activeStep={activeStep} >
                    {
                        steps.map((each,i)=>{
                           return  (<Step key={i}>
                                <StepLabel>{each}</StepLabel>
                            </Step>)
                        })
                    }
               </Stepper>
               {
                   activeStep === steps.length ? <Confirmation isFinished={isFinished} /> :  token && <Form setActiveStep={setActiveStep} timeout={timeout}  />
               }
           </Paper>
        </main>
        </>
    )
}

// const mapStateToProps = (state) => ({
//     token: state.shipping.token,
//     cart: state.cart.items
// })

export default Checkout
