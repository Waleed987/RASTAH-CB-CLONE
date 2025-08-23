const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./utils/db');
const inventoryRoute = require('./Routes/inventory-route');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/inventory',inventoryRoute);

connectDB().then(()=>{
    const PORT = 5000;
    app.listen(PORT,()=>{
        console.log(`listening on PORT NUMBER : ${PORT}`);
    })
})


