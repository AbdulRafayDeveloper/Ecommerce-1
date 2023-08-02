import React from 'react';

const Navbar = () => {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><h2>Chain <em>Ecommerce</em></h2></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/productsPage">Our Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/checkOutPage"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
