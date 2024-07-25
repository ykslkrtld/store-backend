"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const { mongoose } = require('../dbConnection')

/* ------------------------------------------------------- */

// Category Schema
const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
    },{
        collection: 'Categories',
        timestamps: true
    }
)

// Product Schema
const ProductSchema = new mongoose.Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    discountPercentage: Number,
    rating:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    brand: {
        type: String,
        trim: true,
        required: true
    },
    thumbnail: {
        type: String,
        trim: true,
        required: true
    },
    images: {
        type: [String],
        trim: true,
        required: true
    }
}, {
        collection: 'Products',
        timestamps: true
}
)

module.exports = {
    Category: mongoose.model('Category', CategorySchema),
    Product: mongoose.model('Product', ProductSchema)
}

/* ------------------------------------------------------- */
