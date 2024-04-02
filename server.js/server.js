// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route handler for POST /add-to-cart
app.post('/add-to-cart', (req, res) => {
  try {
    // Extract item data from the request body
    const { items } = req.body;

    // Validate the presence of items in the request body
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items array is missing or empty' });
    }

    // Process the items and add them to the Kroger cart
    // Replace this with your actual logic to add items to the cart

    // Respond with a success message
    res.status(204).send();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server and listen on a port
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

