import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.scss';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { handleAddProduct, product } = props;
    const { img, name, seller, price, stock, key } = props.product;
  
    // console.log(props)
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock to order soon </small></p>
               {
                   props.showAddToCart &&  <button className="main-button" onClick={() => handleAddProduct(product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
               }
            </div>

        </div>
    );
};

export default Product;