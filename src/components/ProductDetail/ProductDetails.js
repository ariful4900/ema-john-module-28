import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../assets/fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    let {productKey} = useParams();
    const product = fakeData.find(pd=>pd.key === productKey);
    // console.log(product)
    return (
        <div>
            <h1>Your Product details</h1>
            <Product showAddToCart={false} product={product} ></Product>
        </div>
    );
};

export default ProductDetails;