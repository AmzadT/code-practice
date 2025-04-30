require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./config/db');
const PORT = process.env.PORT || 3005;
const productRouter = require('./routes/product.route');

app.use(cors('*'));
app.use(express.json());
app.use('/api/products', productRouter);

// homepage route
app.get('/', (req, res)=>{
    res.send('Welcome to my backend API');
})

// path ==> page not found
app.use((req, res)=>{
    res.status(404).send('Page not found');
})

app.listen(PORT, async ()=>{
    try {
        await Connection;
        console.log(`Server is running on port : ${PORT} and connected to database`);
    } catch (error) {
        console.log(error, `error while connecting to database ${error.message}`);
    }
})