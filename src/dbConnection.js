"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const mongoose = require('mongoose')

const dbConnection = () => {

    mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/blogAPI')
        .then(() => console.log('- DB connected'))
        .catch(() => console.log('- DB bot connected'))
}

/* ------------------------------------------------------- */


module.exports = {
    mongoose,
    dbConnection
}
