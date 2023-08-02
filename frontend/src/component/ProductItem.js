import React from 'react'
import {Link} from "react-router-dom"
const ProductItem = () => {
    return (
        <>
            <div className="product-item">
                <Link to="/productDetailPage"><img src="assets/images/product_03.jpg" alt="" /></Link>
                <div className="down-content">
                    <Link to="/productDetailPage"><h4>Title goes here</h4></Link>
                    <h6>$20.45</h6>
                    <p>Chain Clothing is free CSS template provided by TemplateMo.</p>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                    <span>Reviews (36)</span>
                </div>
            </div>
        </>
    )
}

export default ProductItem
