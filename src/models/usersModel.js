"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const { mongoose } = require('../dbConnection')

/* ------------------------------------------------------- */

const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: (password) => passwordEncrypt(password),
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)