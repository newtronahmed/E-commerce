import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import useStyles from './style'
// import image from '../../images/22815393.jpg'

const Product = ({product,addToCart}) => {
    
    
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia image={product.media.source} className={classes.media} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5"  >
                        {product.name}
                    </Typography>
                <Typography variant='h6'>
                    {product.price.formatted_with_symbol}
                </Typography>
                </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' />
            </CardContent>
            <CardActions  className={classes.cardActions}>
                <IconButton aria-label='Add to cart' onClick={()=>addToCart(product.id,1)} >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
