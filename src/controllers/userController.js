"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const User = require('../models/usersModel')

/* ------------------------------------------------------- */

const user = {

    list: async (req, res) => {
        const data = await res.getModelList(User)

        res.status(200).send({
            error: false,
            result: data
        })
    },
    create: async (req, res) => {
        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },
    read: async (req, res) => {
        const data = await User.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            result: data
        })
    },
    update: async (req, res) => {
        const data = await User.updateOne({_id: req.params.id}, req.body, {runValidators: true})

        res.status(202).send({
            error: false,
            result:data,
            new: await User.findOne({_id: req.params.id})
        })
    },
    delete: async (req, res) => {
        const data = await User.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data,
          });
    }

}

module.exports = user