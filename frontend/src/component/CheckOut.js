import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import CartProducts from './CartProducts';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const [email, setEmail] = useState('');
    const [customerEmail, setcustomerEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [creditCardNumber, setCreditCardNumber] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
            role: 2
        };

        // Make the HTTP POST request to send the form data to the server
        axios.post("http://localhost:4000/auth/login", data)
            .then(result => {
                // console.log(result.data);
                const { user: { staff_email } } = result.data; // Destructure to get staff_email
                setcustomerEmail(staff_email);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to login. Please try again.'
                });
            });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
        const cart = JSON.parse(localStorage.getItem('cart'));
        let data = {
            customerEmail: customerEmail,
            totalPrice: totalPrice,
            creditCardNumber: creditCardNumber,
            cart: cart
        };

        // console.log("data: " ,data);

        // Make the HTTP POST request to send the form data to the server
        axios.post("http://localhost:4000/addOrder", data)
            .then(result => {
                console.log(result.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Thank you for ordering'
                })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Sorry! your Order not Place'
                });
            });
    };

    return (
        <>
            <Navbar />
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                        <div className="col">
                            <div className="card shopping-cart pb-5" style={{ borderRadius: "15px" }}>
                                <div className="card-body text-black">
                                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Check Out</h3>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            {isLoggedIn ? (
                                                // Show the "Credit Card Number" field when the user is logged in
                                                <div>
                                                    <h2 className='text-center mb-4'>Credit Card Details</h2>
                                                    <div className='row'>
                                                        <div className='col-md-3'></div>
                                                        <div className='col-md-6'>
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label htmlFor="creditCardNumber" className="form-label">Credit Card Number</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="creditCardNumber"
                                                                        value={creditCardNumber}
                                                                        onChange={(e) => setCreditCardNumber(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className='col-md-3'></div>
                                                    </div>
                                                    <center>
                                                        <button
                                                            className='btn btn-warning fw-bolder mt-5 px-5 py-2'
                                                            style={{ color: "white", fontSize: 18 }}
                                                            onClick={handlePlaceOrder}
                                                        >
                                                            Place Your Order
                                                        </button>
                                                    </center>
                                                </div>
                                            ) : (
                                                // Show the login form when the user is not logged in
                                                <div>
                                                    <h2 className='text-center mb-4'>Login</h2>
                                                    <div className='row'>
                                                        <div className='col-md-3'></div>
                                                        <div className='col-md-6'>
                                                            <form onSubmit={handleLogin}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="email" className="form-label">Email</label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        id="email"
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="password" className="form-label">Password</label>
                                                                    <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        value={password}
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <button type="submit" className="btn btn-primary mb-3">Login</button>
                                                                <p>Don't have an account <Link to="/customerSignup">Register</Link> </p>
                                                                <button
                                                                    className='btn btn-warning fw-bolder mt-5 px-5 py-2'
                                                                    style={{ color: "white", fontSize: 18, marginLeft: 50 }} disabled
                                                                >
                                                                    Place Your Order
                                                                </button>
                                                            </form>
                                                        </div>
                                                        <div className='col-md-3'></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-lg-4 px-5 py-4">
                                            <CartProducts />
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
