import React from 'react'
import {Typography,Card,CardContent,CardActions,CardMedia,Button} from '@material-ui/core'
import useStyles from './style'
import {connect} from 'react-redux'
import { updateCartQuantity, removeCartProduct } from '../../../actions/cartActions'

const CartItem = ({item,updateCartQuantity,removeCartProduct}) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}></CardMedia>  
            <CardContent className='flex justify-between'>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                <Button size='small' type='button' onClick={()=>updateCartQuantity(item.id,item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                <Button size='small' type='button' onClick={()=>updateCartQuantity(item.id,item.quantity + 1)}>+</Button>
                </div>
                    <Button variant='contained' type='button' color='secondary' onClick={()=>removeCartProduct(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}


export default connect(null,{updateCartQuantity,removeCartProduct})(CartItem)
