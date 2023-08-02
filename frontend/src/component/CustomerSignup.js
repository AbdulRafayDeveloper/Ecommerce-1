import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import CartProducts from './CartProducts';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const CustomerSignup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            address: address,
            postalCode: postalCode,
            state: state,
            gender: gender
        };

        // Make the HTTP POST request to send the form data to the server
        axios.post("http://localhost:4000/customerSignUp", data)
            .then(result => {
                console.log(result.data); // Assuming the server sends back a response with data
                navigate('/checkOutPage');
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to sign up. Please try again.'
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
                                            {/* Signup Form */}
                                            <h2 className='text-center mb-4'>Sign Up</h2>
                                            <div className='row'>
                                                <div className='col-md-3'></div>
                                                <div className='col-md-6'>
                                                    <form onSubmit={handleSignUp}>
                                                        <div className="mb-3">
                                                            <label htmlFor="name" className="form-label">Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                required
                                                            />
                                                        </div>
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
                                                        <div className="mb-3">
                                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="phone"
                                                                value={phoneNumber}
                                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="address" className="form-label">Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="address"
                                                                value={address}
                                                                onChange={(e) => setAddress(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="postalCode"
                                                                value={postalCode}
                                                                onChange={(e) => setPostalCode(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="state" className="form-label">State</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="state"
                                                                value={state}
                                                                onChange={(e) => setState(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="gender" className="form-label">Gender</label>
                                                            <select
                                                                className="form-control"
                                                                id="gender"
                                                                value={gender}
                                                                onChange={(e) => setGender(e.target.value)}
                                                                required
                                                            >
                                                                <option value="">Select Gender</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                                                        <p>Already have an account? <Link to="/checkOutPage">Login</Link> </p>
                                                    </form>
                                                </div>
                                                <div className='col-md-3'></div>
                                            </div>
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

export default CustomerSignup;
