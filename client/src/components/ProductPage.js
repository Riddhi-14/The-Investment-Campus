// ProductPage.js
import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
    return (
        <div>
            <h2>Product Page</h2>
            <div className="product-container">
                {/* Example product card */}
                <div className="product-card">
                    <img src="course-image.jpg" alt="Course" />
                    <h3>Course Title</h3>
                    <p>Description of the course.</p>
                    <button>View Details</button>
                </div>
                {/* Add more product cards */}
            </div>
        </div>
    );
}

export default ProductPage;
