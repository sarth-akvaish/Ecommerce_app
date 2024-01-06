const port = 4000;
const express = require("express");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { config } = require('dotenv');
config();
const app = express();
app.use(express.json());
app.use(cors());


// Database connection with MongoDB

mongoose.connect(process.env.MONGODB_URL);

// API creation 

app.get("/", (req, res) => {
    res.send("Express is running !");
})

// Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage });

// creating upload endpoints for images

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        require: true
    }, name: {
        type: String,
        require: true
    }, image: {
        type: String,
        require: true
    }, category: {
        type: String,
        require: true
    }, new_price: {
        type: Number,
        require: true
    }, old_price: {
        type: Number,
        require: true
    }, date: {
        type: Date,
        default: Date.now()
    }, available: {
        type: Boolean,
        default: true
    },
})

app.post('/addproduct', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name
    });
})

app.listen(port, (error) => {
    if (!error)
        console.log("Server is running on " + port)
    else
        console.log("Error" + error)
})