import React, { useState, useEffect } from 'react';

const CartProducts = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        // Get the cart products from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartProducts(cart);
    }, []);

    useEffect(() => {
        const totalPrice = cartProducts.reduce((total, product) => {
            return total + calculateTotalPrice(product.price, product.quantity);
        }, 0);
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [cartProducts]);

    const handleRemoveProduct = (productVariantId) => {
        // Remove the product variant from the cartProducts state and update the local storage
        const updatedCartProducts = cartProducts.filter(
            (product) => product.variantId !== productVariantId
        );
        setCartProducts(updatedCartProducts);
        localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
    };

    // Function to calculate the total price for each product (price * quantity)
    const calculateTotalPrice = (price, quantity) => {
        return price * quantity;
    };

    // Calculate the overall total price for all products
    const overallTotalPrice = cartProducts.reduce((total, product) => {
        return total + calculateTotalPrice(product.price, product.quantity);
    }, 0);
    return (
        <div>
            {cartProducts.map((product) => (
                <div className="align-items-center mb-2" key={product.id}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={`http://localhost:4000/img/${product.featuredImage}`} className="" style={{ width: 40, height: 40 }} alt="Product" />
                        </div>
                        <div className="col-md-5">
                            <p className="">{product.title.slice(0,30)}...</p>
                            <p className="text-muted mb-2">Quantity: {product.quantity}</p>
                        </div>
                        <div className="col-md-4" style={{ marginLeft: -10 }}>
                            <a href="#!" className="text-black" onClick={() => handleRemoveProduct(product.variantId)}>
                                <i style={{ color: "red", textDecoration: "underline" }}>Remove</i>
                            </a>
                            <br />
                            <p>Price: ${product.price}</p>
                        </div>
                        <hr className='mt-5'></hr>
                    </div>
                </div>
            ))}
            <h4>Total Price: ${overallTotalPrice}</h4>
        </div>
    )
}

export default CartProducts
