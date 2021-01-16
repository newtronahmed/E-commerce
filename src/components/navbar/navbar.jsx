import React from 'react'
import {connect} from 'react-redux'
import {AppBar,Badge,Toolbar,IconButton,Menu , MenuItem,Typography} from '@material-ui/core'
import logo from '../../images/iconfinder_samsung_4691268 (2).svg'
import {ShoppingCart} from '@material-ui/icons'
import {Link,useLocation} from 'react-router-dom'
import useStyles from './style'

const Navbar = ({cart}) => {
    const classes = useStyles();
    const location = useLocation()
    // console.log(cart.line_items.length)
    return (
        <>
          <AppBar position='fixed' color='inherit'>
              <Toolbar className={classes.toolbar}>
                  <Typography component={Link}  to='/' variant='body2' color='inherit' className={classes.title}>
                    <img src={logo} alt="logo" height='25px' className={classes.logo} />
                        Commerce
                  </Typography>
                  {
                      location.pathname==='/' && (
                        <div>
                            <IconButton component={Link} to='/cart' aria-label='add to cart' color='inherit'>
                            <Badge badgeContent={cart.total_items ? cart.total_items : 0} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                            </IconButton>
                        </div>
                      )
                  }
                  
              </Toolbar>
            </AppBar>  
        </>
    )
}
const mapStateToProps = (state) =>({
    cart: state.cart.items
})

export default connect(mapStateToProps)(Navbar)
