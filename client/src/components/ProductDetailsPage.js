// ProductDetailsPage.js

import React from 'react';
import './ProductDetailsPage.css'; // Import CSS file for styling

const ProductDetailsPage = ({ product, referralLink }) => {
    const handleCopyReferralLink = () => {
        // Logic to copy referral link to clipboard
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied to clipboard!');
    };

    return (
        <div className="product-details-container">
            <h1>Product Details</h1>
            <div className="product-details">
                <img src="product-image.jpg" alt="Product" className="product-image" />
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Referral Link: {referralLink}</p>
                    <button onClick={handleCopyReferralLink}>Copy Referral Link</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
