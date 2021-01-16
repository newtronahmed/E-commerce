import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import {Controller, useFormContext} from 'react-hook-form'


const CusTextField = ({name,label}) => {
    const {control }= useFormContext()
    return (
        
            <Grid item xs={12} sm={6} >
                <Controller
                 as={TextField} 
                 fullWidth
                 control={control}
                 name={name}
                 label={label}
                 required
                 defaultValue=''
                 />
            </Grid>
        
    )
}

export default CusTextField
