const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase=require('./config/connectDatabase');
const cors=require('cors');


dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(cors())
app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:password@cluster0.mongodb.net/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // 30 seconds
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB connection error:", err));

