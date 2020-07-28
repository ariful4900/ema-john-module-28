import React from 'react';

import './Cart.scss';

const Cart = (props) => {
    // console.log(auth.user)
    
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    const { cart } = props;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        // debugger

    }
    // const totalPrice = formatNumber(total);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }
    // const totalShipping = formatNumber(shipping)

    const tax = total / 10;
    // const totalTax = formatNumber(tax);

    const totalAmount = total + shipping + tax;
    // const grandTotal = formatNumber(totalAmount);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="topFixed">
            <div className="summary-heading">
                <h4>Order Summery</h4>
                <p>Items Orders: {cart.length}</p>
            </div>
            <div className="summary-amount">
                <p>Product Price: {formatNumber(total)}</p>
                <p><small>Shipping : {formatNumber(shipping)}</small></p>
                <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
                <p>total price: {formatNumber(totalAmount)}</p>
                <br />
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;