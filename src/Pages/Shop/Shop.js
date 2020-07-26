import React, { useEffect, useState } from 'react';

import './Shop.scss';
import fakeData from '../../assets/fakeData';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../assets/utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const allData = fakeData;
        const first10 = allData.slice(0, 10);
        setProducts(first10)
    }, []);

    useEffect(() => {

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            // console.log(existingKey, savedCart[existingKey]);
            product.quantity = savedCart[existingKey];
            return product
        })
        setCart(previousCart);
    }, []);

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);

        addToDatabaseCart(toBeAddedKey, count);
    };



    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map((product, key) => <Product
                        key={key}
                        showAddToCart={true}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}  >
                    
                    <Link to="/review"><button className="main-button">Review Order</button></Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;