"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

const { dbConnection, mongoose } = require("./src/dbConnection")

/* ------------------------------------------------------- */

// Accept Json
app.use(express.json());

// DB Connection
dbConnection()



/* ------------------------------------------------------- */


  
  /* ------------------------------------------------------- */

// Routes
app.use(require("./src/routes/productsRouter"));

// Catch Error from Async
require('./src/middlewares/errorHandler')




  /* ------------------------------------------------------- */

// Catch Errors:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send({
    message: "Welcome to Store Api",
    session: req.session,
  });
});




/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));






/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
