import React, { useEffect} from 'react'
import { Typography, Grid, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {useForm,FormProvider} from 'react-hook-form'
import CusTextField from '../customTextField'
import useStyles from './style'
import { fetchCountries,setShippingCountry, fetchShippingSubdivisions, setShippingSubdivision , setShippingOption , fetShippingOptions, setShippingData} from '../../../../actions/shippingActions'
import { FetchShippingOptions } from '../../../../actions/types'
const AddressForm =
 ({token, setActiveStep,fetchCountries,countries,country,setShippingCountry, subdivisions, subdivision, setShippingSubdivision, fetchShippingSubdivisions , shippingOption, shippingOptions, setShippingOption ,fetShippingOptions, setShippingData}) => {
    // const [shippingCountrys,setShippingCountrys] = useState([])
    // const [shippingCountry,setShippingCountry]= useState('')
    // const [shippingSubdivisions,setShippingSubdivisions]= useState([])
    // const [shippingSubdivision,setShippingSubdivision]= useState('')
    // const [shippingOptions,setShippingOptions]= useState([])
    // const [shippingOption,setShippingOption]= useState('')
    
    const methods = useForm()
    const classes = useStyles();
    useEffect(()=>{
        fetchCountries(token) 
    },[])
    
    useEffect(()=>{
       if(country) fetchShippingSubdivisions(country)
    },[fetchShippingSubdivisions, country])
    useEffect(()=>{
        // console.log('country',country,subdivision)
        if(subdivision && country) fetShippingOptions(token.id,country,subdivision)
    },[subdivision])
    const countriesArray = Object.entries(countries).map(([code,name])=> ({id:code,label:name}))
    const divisionsArray = Object.entries(subdivisions).map(([code,name])=> ({id:code,label:name}))
    const optionsArray = shippingOptions.map(each=>({id:each.id, label:`${each.description} - ${each.price.formatted_with_symbol}`}))
    const nextStep= ()=>setActiveStep(prev=>prev+1)
    const backStep= ()=>setActiveStep(prev=>prev-1)
    const next = (data) =>{
        
        setShippingData(data)
        nextStep()
    }
    return (
        <>
            <Typography align='center'>Shipping Address</Typography> 
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit((data)=>next({...data, country,subdivision, shippingOption}))} className={classes.form}>
                    <Grid container  spacing={3}>
                        <CusTextField name='firstname' label='FirstName' />
                        <CusTextField name='lasttname' label='lastName' />
                        <CusTextField name='address' label='address' />
                        <CusTextField name='city' label='city' />
                        <CusTextField name='email' label='email' />
                        <CusTextField name='Zip' label='Zip / postal code' />
                        <Grid item xs={12}  sm={6}>
                            <InputLabel>Select shiping country</InputLabel>
                            <Select fullwidth onChange={(e)=>setShippingCountry(e.target.value)}  value={country} >     
                                    {
                                        countriesArray.map(each=>{
                                            return(
                                                <MenuItem value={each.id} key={each.id}>
                                                    {each.label}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                    
                            </Select>
                        </Grid>
                        <Grid item xs={12}  sm={6}>
                            <InputLabel>Select shiping country</InputLabel>
                            <Select  fullwidth onChange={(e)=>setShippingSubdivision(e.target.value)} value={subdivision} >
                               {
                                   divisionsArray.map(each=>{
                                       return (
                                        <MenuItem value={each.id} key={each.id}>
                                            {each.label}
                                        </MenuItem>
                                       )
                                   })
                               }
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12}  sm={6}>
                            <InputLabel>Select shiping options</InputLabel>
                            <Select  fullwidth onChange={(e)=>setShippingOption(e.target.value)}  value={shippingOption} >
                                {
                                    optionsArray.map(each=>{
                                        return (
                                            <MenuItem value={each.id} key={each.id}>
                                                {each.label}
                                            </MenuItem>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Grid>
                    </Grid>
                    <br></br>
                    <div className='flex justify-between'>
                            <Button variant='outlined'  component={Link} to='/cart'>go back to cart</Button>
                            <Button variant='contained' color='primary' type='submit'>submit</Button>
                    </div>
                </form>
            </FormProvider>

        </>
    )
}
const mapStateToProps = (state) => ({
    countries: state.shipping.shippingCountrys,
    country: state.shipping.shippingCountry,

    subdivisions: state.shipping.shippingSubdivisions,
    subdivision: state.shipping.shippingSubdivision,

    shippingOptions: state.shipping.shippingOptions,
    shippingOption: state.shipping.shippingOption,

})

export default connect(mapStateToProps,{fetchCountries,setShippingCountry,fetchShippingSubdivisions,setShippingSubdivision,setShippingOption, fetShippingOptions,setShippingData})(AddressForm)
