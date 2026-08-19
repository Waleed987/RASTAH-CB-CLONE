require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./utils/db');
const inventoryRoute = require('./Routes/inventory-route');
const userRoute = require('./Routes/user-route');
const cartRoute = require('./Routes/cart-route');
const orderRoute = require('./Routes/order-route');

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/inventory', inventoryRoute);
app.use('/api/user', userRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

connectDB();

// For local development: start the server normally
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`listening on PORT NUMBER : ${PORT}`);
    });
}

// Export app for Vercel serverless
module.exports = app;
