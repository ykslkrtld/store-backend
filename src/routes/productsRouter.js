"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require('express').Router()

const { category, product } = require('../controllers/productsController')

const {isLogin, isAdmin} = require('../middlewares/permissions')



// Category
router.route('/category')
    .get(isLogin, category.list)
    .post(isAdmin, category.create)

router.route('/category/:categoryId')
    .get(isLogin, category.read)
    .put(isAdmin, category.update)
    .patch(isAdmin, category.update)
    .delete(isAdmin, category.delete)


router.get('/category/:categoryId/product', category.listProductsByCategory)



// Product
router.route('/product')
    .get(isLogin, product.list)
    .post(isAdmin, product.create)

router.route('/product/:productId')
    .get(isLogin, product.read)
    .put(isAdmin, product.update)
    .patch(isAdmin, product.update)
    .delete(isAdmin, product.delete)



module.exports = router
