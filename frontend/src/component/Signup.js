import React from 'react'
import { Link } from 'react-router-dom'
// import axios from "axios"

function Login() {
//     // const [login_email, login_set_email] = useState("");
//     // const [login_password, login_set_password] = useState("");
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Make the HTTP POST request to send the form data to the server
//         axios.post("http://localhost:4000/login", { login_email, login_password })
//             .then(result => {
//                 console.log(result.data); // Assuming the server sends back a response with data
//                 // redirect url 

//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }
    return (
        <>
            <section class="h-100 gradient-form" style={{backgroundColor:"#eee"}}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">
                            <div class="card rounded-3 text-black mt-3 mb-3">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card-body">

                                            <div class="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{width:185}} alt="logo" />
                                                <h4 class="mt-1 mb-5 pb-1">We are The Chain Ecommerce</h4>
                                            </div>

                                            <form>
                                                <p>Please signup for an account</p>
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="signup_name" name="signup_name" class="form-control"
                                                        placeholder="Enter your name" />
                                                    <label class="form-label" for="signup_name">Username</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="email" id="signup_email" name="signup_email"
                                                        class="form-control" placeholder="Enter your email address" />
                                                    <label class="form-label" for="signup_email">Email</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="password" id="signup_password" name="signup_password"
                                                        class="form-control" placeholder="Enter your password" />
                                                    <label class="form-label" for="signup_password">Password</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <select class="form-control" name="role" id="role" style={{fontSize:14}}>
                                                        <option value="0">Editor</option>
                                                        <option value="1">Admin</option>
                                                    </select>
                                                    <label class="form-label">User Role</label>
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button type="button" class="btn btn-outline-danger">Create new</button>
                                                </div>

                                                <div class="d-flex align-items-center justify-content-center pb-4" style={{marginTop: -30}}>
                                                    <p class="mb-0 me-2">Already have an account?</p>
                                                    <Link class="btn btn-primary btn-block fa-lg gradient-custom-2" to="/login"
                                                        type="button" style={{width: 85,height:28,paddingTop:12}}>Login</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">We are more than just a company</h4>
                                            <p class="small mb-0" style={{color: "white"}}>
                                                Welcome to ChainMart - Your One-Stop Shop for All Your Shopping Needs!
                                                ChainMart is a leading chain e-commerce platform, offering a wide range of products
                                                from various categories to meet your shopping desires. With our user-friendly
                                                interface and secure checkout process, shopping has never been easier.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
