import React, { useEffect } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { emptyCart } from "../../actions/cartActions";
import CartItem from "./cartItem/cartItem";

const Cart = ({ cart, fetchCart, emptyCart }) => {
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  console.log(cart);
  const EmptyCart = () => {
    return (
      <Typography variant="h6" gutterBottom>
        Please add Products to your cart
        <Link to="/" className="underline">
          click this link to add some
        </Link>
      </Typography>
    );
  };
  const CartList = () => {
    return (
      <>
        <Typography variant="h4" className="text-center">
          Your Shopping Cart
        </Typography>
        <Grid container spacing={3}>
          {cart.line_items.map((each) => (
            <Grid item xs={12} sm={4} key={each.id}>
              <CartItem item={each} />
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant="h4">
            {" "}
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              variant="contained"
              type="button"
              size="large"
              color="secondary"
              onClick={() => emptyCart()}
            >
              EmptyCart{" "}
            </Button>
            <Button
              variant="contained"
              type="button"
              size="large"
              color="primary"
              component={Link}
              to='/checkout'
            >
              Checkout{" "}
            </Button>
          </div>
        </div>
      </>
    );
  };
  const classes = useStyles();
  if (!cart.line_items) return "loading";
  return (
    <Container>
      <div className={classes.toolbar}></div>
      {!cart.line_items.length ? <EmptyCart /> : <CartList />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps, { fetchCart, emptyCart })(Cart);
