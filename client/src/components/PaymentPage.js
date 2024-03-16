// PaymentPage.js

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './PaymentPage.css';

const PaymentPage = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const response = await fetch('/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: 1000,
                    currency: 'INR'
                })
            });
            const { paymentLink } = await response.json();
            window.location.href = paymentLink;
        } catch (error) {
            console.error('Error processing payment:', error);
            setLoading(false);
        }
    };

    return (
        <div className="payment-container">
            <h1 className="payment-header">Payment Page</h1>
            <p>Click the button below to proceed with the payment:</p>
            <button className="payment-button" onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing Payment...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default PaymentPage;
