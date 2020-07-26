import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../assets/utilities/databaseManager';
import fakeData from '../../assets/fakeData';
import ReviewItem from '../../components/ReviewItem/ReviewItem';
import Cart from '../../components/Cart/Cart';
import happyImage from '../../assets/images/giphy.gif';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false)

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlace(true)
        processOrder();
    }

    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts)
        // console.log(cartProducts);
    }, []);
    let thankyou;
    if (orderPlace) {
        thankyou = <img src={happyImage} alt="" />
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        <button className="main-button">Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;