// services/productService.js

import axios from 'axios';

class ProductService {
  constructor() {
    // Define the base URL for your backend API
    this.baseURL = 'http://localhost:3000/api/products'; // Update with your actual backend URL
  }

  // Fetch all products
  async getAllProducts() {
    try {
      const response = await axios.get(this.baseURL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Fetch product details by ID
  async getProductById(productId) {
    try {
      const response = await axios.get(`${this.baseURL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  }

  // Update product details
  async updateProduct(productId, updatedProductData) {
    try {
      const response = await axios.put(`${this.baseURL}/${productId}`, updatedProductData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${productId}:`, error);
      throw error;
    }
  }

  // Delete product by ID
  async deleteProduct(productId) {
    try {
      const response = await axios.delete(`${this.baseURL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  }
}

export default new ProductService();
