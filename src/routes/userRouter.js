"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require('express').Router()

const user = require('../controllers/userController')

const {isAdmin} = require('../middlewares/permissions')

/* ------------------------------------------------------- */

// router.use(isAdmin)

router.route('/user')
    .get(user.list)
    .post(user.create)

router.route('/user/:id')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)


module.exports = router
