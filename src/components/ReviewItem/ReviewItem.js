import React from 'react';
import './ReviewItem.scss'

const ReviewItem = (props) => {
    console.log(props);
    const { name, quantity, key, price} = props.product;

    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div className="review-item" style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
    <p><small>Price: ${price}</small></p>
            <br/>
            <button 
            className="main-button" 
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;