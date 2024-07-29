"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const User = require('../models/usersModel')


/* ------------------------------------------------------- */


module.exports = async (req, res, next) => {

    req.user = null

    if(req?.session?._id) {
        
        const user = await User.findOne({_id: req.session._id})

        if(user && user.password == req.session.password) {

            req.user = user

        } else {

            req.session = null

        }

    }

    next()
}


/* ------------------------------------------------------- */
