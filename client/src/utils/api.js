// api.js
const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const api = {
  // Example function to fetch products from backend
  fetchProducts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  // Add more API functions as needed
};

export default api;
