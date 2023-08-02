import React, { useState, useEffect } from 'react';
import Footer from './Footer';
// import axios from 'axios';
// import ProductItem from './ProductItem';
import Corousel from './Corousel';
import Navbar from './Navbar';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:4000/showproducts');
                console.log("")
                if (response.ok) {
                    const data = await response.json();
                    // console.log("Data: ", data.result);
                    setProducts(data.result);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        }

        fetchProducts();

    }, []);

    return (
        <>
            <Navbar />
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Corousel />
            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        {/* Map through the product data and render ProductItem components */}
                        {products.map((product) => (
                            <div key={product._id} className='col-md-3'>

                                <div className="product-item flex shadow">
                                    <a href={`/productDetailPage?id=${product._id}`} >
                                        <img src={`http://localhost:4000/img/${product.product_featured_Image}`} alt={product.product_title} className='img-fluid' style={{ height: 210, width: 260 }} />
                                    </a>
                                    <div className="down-content" style={{ marginTop: -10 }}>
                                        <a href={`/productDetailPage?id=${product._id}`}>
                                            <h4>{product.product_title.slice(0, 59)}..</h4>
                                        </a>
                                        <div className="row" style={{ marginTop: -15 }}>
                                            <div className="col-md-9">
                                                <p style={{ textAlign: "left" }} className='fw-bolder'>{product.product_brand}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p style={{ textAlign: "right" }} className='fw-bolder'>${product.product_price}</p>
                                            </div>
                                        </div>
                                        <ul className="stars" style={{ marginTop: -15 }}>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <span >Reviews (36)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="best-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>About Chain Clothing</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h4>Looking for the best products?</h4>
                                <p><a rel="nofollow" href="https://templatemo.com/tm-546-Chain-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
                                <ul className="featured-list">
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Consectetur an adipisicing elit</a></li>
                                    <li><a href="/">It aquecorporis nulla aspernatur</a></li>
                                    <li><a href="/">Corporis, omnis doloremque</a></li>
                                    <li><a href="/">Non cum id reprehenderit</a></li>
                                </ul>
                                <a href="about.html" className="filled-button">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="assets/images/feature-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-content">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4>Creative &amp; Unique <em>Chain</em> Products</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="/" className="filled-button">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
