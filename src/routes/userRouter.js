"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require('express').Router()

const user = require('../controllers/userController')

const {isAdmin} = require('../middlewares/permissions')

/* ------------------------------------------------------- */

// router.use(isAdmin)  // bu şekilde login yapmaya izin vermedi

router.route('/user')
    .get(isAdmin, user.list)
    .post(isAdmin, user.create)

router.route('/user/:id')
    .get(isAdmin, user.read)
    .put(isAdmin, user.update)
    .patch(isAdmin, user.update)
    .delete(isAdmin, user.delete)


module.exports = router
