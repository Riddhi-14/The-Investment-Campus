// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const Sale = require('./models/Sale');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to retrieve sales data for different time frames
app.get('/sales', async (req, res) => {
  try {
    const sales = await Sale.find();
    const todaySales = calculateSalesForTimeFrame(sales, 'day');
    const weekSales = calculateSalesForTimeFrame(sales, 'week');
    const monthSales = calculateSalesForTimeFrame(sales, 'month');
    const yearSales = calculateSalesForTimeFrame(sales, 'year');
    const lifetimeSales = calculateLifetimeSales(sales);
    res.json({
      todaySales,
      weekSales,
      monthSales,
      yearSales,
      lifetimeSales
    });
  } catch (error) {
    console.error('Error retrieving sales data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Helper functions for calculating sales
function calculateSalesForTimeFrame(sales, timeframe) {
  // Implementation details...
}
function calculateLifetimeSales(sales) {
  // Implementation details...
}

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout route
app.post('/logout', (req, res) => {
  // Implement logout logic here (e.g., clearing session data)
  res.json({ message: 'Logout successful' });
});

// Razorpay configuration
const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

// Payment creation route
app.post('/create-payment', async (req, res) => {
    const { amount, currency } = req.body;
    try {
        const paymentOptions = {
            amount: amount * 100,
            currency,
            receipt: 'receipt#1',
            payment_capture: 1
        };
        const response = await razorpay.orders.create(paymentOptions);
        const paymentLink = response.short_url;
        res.json({ paymentLink });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
