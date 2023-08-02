import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        // Get the cart products from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartProducts(cart);
    }, []);

    const handleRemoveProduct = (productVariantId) => {
        // Remove the product variant from the cartProducts state and update the local storage
        const updatedCartProducts = cartProducts.filter(
            (product) => product.variantId !== productVariantId
        );
        setCartProducts(updatedCartProducts);
        localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
    };

    return (
        <>
            <Navbar />
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee"  }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                        <div className="col">
                            <div className="card shopping-cart" style={{ borderRadius: "15px" }}>
                                <div className="card-body text-black">
                                    <div className="row">
                                        <div className="col-lg-12 px-5 py-4">
                                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your Cart Products</h3>
                                            
                                            {cartProducts.map((product) => (
                                                
                                                <div className="align-items-center mb-5" key={product.id}>
                                                    <hr className='mb-5'></hr>
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <div className="col-md-4">
                                                                <img src={`http://localhost:4000/img/${product.featuredImage}`} className="" style={{ width: 120, height: 120 }} alt="Product" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h6 className="mb-2 fw-bold">{product.title}</h6>
                                                            <p className="text-muted mb-2 fw-bolder" >Brand: {product.brand}</p>
                                                            
                                                        </div>
                                                        <div className="col-md-3">
                                                        <p className="text-muted mb-2 fw-bolder" >Quantity: {product.quantity}</p>
                                                        <p className="text-muted mb-2 fw-bolder">Size: {product.size}</p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="flex-grow-1 ms-3">
                                                                <a href="#!" className="text-black" onClick={() => handleRemoveProduct(product.variantId)}>
                                                                    <i style={{ color: "red", textDecoration: "underline" }}>Remove</i>
                                                                </a>
                                                                <br />
                                                                <h6 className="mb-2 fw-bolder">Price: ${product.price}</h6>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-3'></div>
                                            <div className='col-md-3'>
                                                <Link
                                                    to="/"
                                                    className="btn btn-warning shadow-0 px-5 py-2"
                                                    style={{ color: "white", backgroundColor: "#2ABBE8", border: "none", fontWeight: 600 , marginTop:-50,marginLeft:50 }}
                                                >
                                                    Go to Home
                                                </Link>
                                            </div>
                                            <div className='col-md-3'>
                                                <Link
                                                    to="/checkOutPage"
                                                    className="btn btn-primary shadow-0 px-5 py-2"
                                                    style={{ backgroundColor: "#F57224", border: "none", fontWeight: 600,marginTop:-50 }}
                                                >
                                                    Check out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
};

export default CheckOut;
