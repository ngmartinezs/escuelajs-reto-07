import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import {removeToCart} from '../actions/index';

const Checkout = (props) => {
  const { cart } = props;

  const handleRemoveToCart = (product) => {
    props.removeToCart(product);
  }

  
  const totalCosto = cart.map(item => item.price).reduce((total,item)=>{
    return total+item;
  });

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
                <i className="fas fa-trash-alt" onClick={() => handleRemoveToCart(item.id)} />
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4> $ {totalCosto} </h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);