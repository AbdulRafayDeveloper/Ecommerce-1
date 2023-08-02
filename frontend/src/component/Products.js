import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('All'); // State to store the selected brand name
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store the filtered products

  useEffect(() => {
    // Fetch products from the API based on the selected brand name
    fetchProducts(selectedBrand);
  }, [selectedBrand]);

  const fetchProducts = async (brand) => {
    console.log(brand);
    try {
      const response = await fetch("http://localhost:4000/showproductByBrands", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data in Api: ", data);
        setFilteredProducts(data.result);
      } else {
        console.log("Response not ok");
        setFilteredProducts([]);
      }

    } catch (error) {
      console.error('Error fetching products:', error);
      setFilteredProducts([]);
    }
  };


  return (
    <>
      <Navbar />
      <div className="page-heading products-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>new arrivals</h4>
                <h2>Chain products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="products">
        <div className="container">
          <div className="row">
            <div className="filters">
              <ul>
                <li
                  className={selectedBrand === 'All' ? 'active px-3' : 'px-3'}
                  onClick={() => setSelectedBrand('All')} // Set the selected brand to 'All' when clicked
                >
                  All Products
                </li>
                <li
                  className={selectedBrand === "Levi's" ? 'active px-3' : 'px-3'}
                  onClick={() => setSelectedBrand("Levi's")} // Set the selected brand to "Levi's" when clicked
                >
                  Levi's
                </li>
                <li
                  className={selectedBrand === 'Nike' ? 'active px-3' : 'px-3'}
                  onClick={() => setSelectedBrand('Nike')} // Set the selected brand to 'Nike' when clicked
                >
                  Nike
                </li>
                <li
                  className={selectedBrand === 'Adidas' ? 'active px-3' : 'px-3'}
                  onClick={() => setSelectedBrand('Adidas')} // Set the selected brand to 'Adidas' when clicked
                >
                  Adidas
                </li>
              </ul>
            </div>

            {filteredProducts.map((product) => (
              <div key={product._id} className='col-md-3'>

                <div className="product-item flex shadow">
                  <a href={`/productDetailPage?id=${product._id}`} >
                    <img src={`http://localhost:4000/img/${product.product_featured_Image}`} alt={product.product_title} className='img-fluid' style={{ height: 210, width: 260 }} />
                  </a>
                  <div className="down-content" style={{marginTop:-10}}>
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
          <div className="col-md-12">
            <ul className="pages">
              <li><a href="/productsPage">1</a></li>
              <li className="active"><a href="/productsPage">2</a></li>
              <li><a href="/productsPage">3</a></li>
              <li><a href="/productsPage">4</a></li>
              <li><a href="/productsPage"><i className="fa fa-angle-double-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />


      {/* The rest of the JSX code... */}
    </>
  );
};

export default Products;
