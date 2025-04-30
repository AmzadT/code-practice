const express = require('express');
const userRouter = express.Router()
const productModel = require('../models/product.model')


// create product
userRouter.post('/add', async (req, res)=>{
    try {
        const addProduct = await productModel.create(req.body)
        res.status(201).json({success: 'true', data: addProduct})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: 'false', error: error.message})
    }
})

// get single product
userRouter.get('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const product = await productModel.findById(id)
        res.status(200).jason({success: 'true', data: product})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: 'false', error: error.message})
    }
})


// get all products
userRouter.get('/', async (req, res)=>{
    try {
        const products = await productModel.find()
        res.status(200).jason({success: 'true', data: products})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: 'false', error: error.message})
    }
})


// update partial data (single)
userRouter.patch('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).jason({success: 'true', data: updatedProduct})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: 'false', error: error.message})
    }
})


// update full data (replace)
userRouter.put('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).jason({success: 'true', data: updatedProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: 'false', error: error.message})
    }
})


// delete a product
userRouter.delete('/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const deletedProduct = await productModel.findByIdAndDelete(id)
        res.status(200).json({success: 'true', data: deletedProduct})
    } catch (error){
        console.log(error)
        res.status(500).json({success: 'false', error: error.message})
    }
})

module.exports = userRouter