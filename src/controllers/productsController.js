"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const { Category, Product } = require('../models/productsModel')

const category = {

    list: async (req, res) => {
        const data = await res.getModelList(Category) 

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Category),
            result: data
        })
    },
    create: async (req, res) => {
        const data = await Category.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },
    read: async (req, res) => {
        const data = await Category.findOne({_id: req.params.categoryId})

        res.status(200).send({
            error: false,
            result: data
        })
    },
    update: async (req, res) => {
        const data = await Category.updateOne({_id: req.params.categoryId}, req.body)

        res.status(202).send({
            error: false,
            result:data,
            new: await Category.findOne({_id: req.params.categoryId})
        })
    },
    delete: async (req, res) => {
        const data = await Category.deleteOne({_id: req.params.categoryId})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data,
          });
    },
    listProductsByCategory: async (req, res) => {
        const data = await res.getModelList(Product, {categoryId: req.params.categoryId}, 'categoryId')
        // Product.find({categoryId: req.params.categoryId}).populate('categoryId')

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Product, {categoryId: req.params.categoryId} ),
            data
        })
    }
}


const product = {

    list: async (req, res) => {
        const data = await res.getModelList(Product, {}, 'categoryId')

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Product),
            result: data
        })
    },
    create: async (req, res) => {
        const data = await Product.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },
    read: async (req, res) => {
        const data = await Product.findOne({_id: req.params.productId}).populate('categoryId')

        res.status(200).send({
            error: false,
            result: data
        })
    },
    update: async (req, res) => {
        const data = await Product.updateOne({_id: req.params.productId}, req.body)

        res.status(202).send({
            error: false,
            result:data,
            new: await Product.findOne({_id: req.params.productId})
        })
    },
    delete: async (req, res) => {
        const data = await Product.deleteOne({_id: req.params.productId})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data,
          });
    }

}

module.exports = {
    category,
    product
}




/* ------------------------------------------------------- */
