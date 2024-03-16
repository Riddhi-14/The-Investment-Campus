const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
