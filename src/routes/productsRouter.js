"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require('express').Router()

const { category, product } = require('../controllers/productsController')


// Category
router.route('/category')
    .get(category.list)
    .post(category.create)

router.route('/category/:categoryId')
    .get(category.read)
    .put(category.update)
    .patch(category.update)
    .delete(category.delete)


// Product
router.route('/product')
    .get(product.list)
    .post(product.create)

router.route('/product/:productId')
    .get(product.read)
    .put(product.update)
    .patch(product.update)
    .delete(product.delete)


module.exports = router
