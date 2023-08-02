import React, { useState, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ProductsDetail() {
    const [product, setProduct] = useState({});
    const [stock, setStock] = useState("");
    const location = useLocation();
    const productId = new URLSearchParams(location.search).get('id');
    const [featuredImage, setFeaturedImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [ZoomedImage,setZoomedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const navigate = useNavigate();


    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    useEffect(() => {
        async function fetchProductDetails() {
            try {
                const response = await fetch(`http://localhost:4000/updateProductData/?id=${productId}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data.product);
                    if (!featuredImage && data.product.product_gallery_image && data.product.product_gallery_image.length > 0) {
                        setFeaturedImage(data.product.product_gallery_image[0]); // Set the featured image to the first gallery image if it's not set yet
                    }
                }
            } catch (err) {
                console.error('Error fetching product details:', err);
            }
        }

        async function fetchProductStock() {
            try {
                const response = await fetch(`http://localhost:4000/checkStock/?id=${productId}`);
                if (response.ok) {
                    const data = await response.json();
                    setStock(data);
                }
            } catch (err) {
                console.error('Error fetching product stock:', err);
            }
        }

        fetchProductDetails();
        fetchProductStock();
    }, [productId, featuredImage]);

    const handleGalleryImageClick = (image) => {
        setFeaturedImage(image);
        setZoomedImage(null); // Reset the zoomed image when a new gallery image is clicked
    };

    // ... (previous code)

    const handleAddToCart = () => {
        // Get the existing cart from the localStorage or create an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Generate the unique identifier for the product with the selected size
        const productVariantId = `${productId}-${selectedSize}`;

        // Check if the product variant already exists in the cart
        const existingProductIndex = cart.findIndex((item) => item.variantId === productVariantId);

        if (existingProductIndex !== -1) {
            // If the product variant already exists, increase its quantity by 1
            cart[existingProductIndex].quantity += 1;
        } else {
            // If the product variant is not in the cart, add a new product
            cart.push({
                variantId: productVariantId, // Use the unique identifier for this product variant
                id: productId,
                quantity: quantity,
                size: selectedSize,
                brand: product.product_brand,
                price: product.product_price,
                title: product.product_title,
                featuredImage: featuredImage || product.product_featured_Image,
            });
        }

        // Save the updated cart to the localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate("/addToCart");
    };

    return (
        <>
            <Navbar />
            <section className="py-5">
                <div className="container mt-5" style={{ paddingTop: 30 }}>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="mb-5 d-flex justify-content-center image-zoom-container" style={{ maxWidth: "100%", maxHeight: "60vh", overflow: "hidden", marginTop: "-40px" }}>
                                <div className="rounded-4">
                                    <img
                                        style={{ width: "340px", height: "500px", objectFit: "contain" }}
                                        className="rounded-4 fit"
                                        src={`http://localhost:4000/img/${featuredImage || product.product_featured_Image}`}
                                        alt="detail of product"
                                        onMouseEnter={() => setZoomedImage(featuredImage)} // Show the zoomed image on mouse enter
                                        onMouseLeave={() => setZoomedImage(null)} // Reset the zoomed image on mouse leave
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                {product.product_gallery_image &&
                                    product.product_gallery_image.map((image, index) => (
                                        <img
                                            key={index}
                                            className={`border mx-1 rounded-2 item-thumb ${image === featuredImage ? "active" : ""}`}
                                            src={`http://localhost:4000/img/${image}`}
                                            alt="detail of product"
                                            style={{ width: "80px", height: "80px", cursor: "pointer" }}
                                            onMouseOver={() => handleGalleryImageClick(image)} // Use onClick to change the featured image and reset the zoomed image
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.product_title}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-success ms-2">{stock}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5">${product.product_price}</span>
                                    <span className="text-muted">/per box</span>
                                </div>

                                <p>
                                    {product.product_description}
                                </p>

                                <div className="row mt-3">

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">{product.product_brand}</dd>
                                </div>

                                <hr />

                                <div className="row mb-5">
                                    <div className="col-md-4 col-6">
                                        {product.product_size && product.product_size.length > 0 && (
                                            <>
                                                <dt className="col-3 mb-2">Size</dt>
                                                <dd className="col-9">
                                                    <select
                                                        className="form-select border border-secondary"
                                                        style={{ height: "35px" }}
                                                        value={selectedSize} // Set the selected value to the current selectedSize state
                                                        onChange={(e) => setSelectedSize(e.target.value)} // Update the selectedSize state when the user chooses a different size
                                                    >
                                                        {product.product_size.map((size, index) => (
                                                            <option key={index} value={size}>{size}</option> // Use the value attribute to store the size value
                                                        ))}
                                                    </select>
                                                </dd>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <label className="d-block mb-2" style={{ fontWeight: 600 }}>Quantity</label>
                                        <div className="input-group" style={{ width: "170px" }}>
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon1"
                                                data-mdb-ripple-color="dark"
                                                onClick={handleDecrement}
                                                disabled={quantity === 1}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center border border-secondary"
                                                placeholder="1"
                                                value={quantity}
                                                aria-label="Example text with button addon"
                                                aria-describedby="button-addon1"
                                                readOnly
                                            />
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon2"
                                                data-mdb-ripple-color="dark"
                                                onClick={handleIncrement}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/checkOutPage"
                                    className="btn btn-warning shadow-0 px-5 py-2"
                                    style={{ color: "white", backgroundColor: "#2ABBE8", border: "none", fontWeight: 600 }}
                                >
                                    Check out
                                </Link>
                                {stock === "Out of Stock" ? (
                                    <button
                                        className="btn btn-primary shadow-0 px-5 py-2"
                                        style={{ marginLeft: 40, backgroundColor: "#F57224", border: "none", fontWeight: 600 }}
                                        disabled
                                    >
                                        <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                                    </button>
                                ) : (
                                    // If the product is in stock, allow adding it to the cart
                                    <button
                                        className="btn btn-primary shadow-0 px-5 py-2"
                                        style={{ marginLeft: 40, backgroundColor: "#F57224", border: "none", fontWeight: 600 }}
                                        onClick={handleAddToCart}
                                    >
                                        <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default ProductsDetail;