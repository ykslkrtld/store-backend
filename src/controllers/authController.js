"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const User = require("../models/usersModel");

const passwordEncrypt = require("../helpers/passwordEncrypt");

/* ------------------------------------------------------- */

const auth = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user) {

        if (user.password == password) {

          req.session._id = user._id;
          req.session.password = user.password;

          res.status(200).send({
            error: false,
            message: "Login: ok",
            user
          });
          
        } else {
          res.errorStatusCode = 401;
          throw new Error(" Login parametres are not true");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error(" This user not found");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error(" Email and password are required");
    }
  },
  logout: async (req, res) => {
    req.session = null;

    res.status(200).send({
      error: false,
      message: "logout: OK",
    });
  },
};

module.exports = auth
