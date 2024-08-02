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

// Catch error from async
require('express-async-errors')


/* ------------------------------------------------------- */
const session = require('cookie-session') // Session Middleware

app.use(session({ 
    secret: process.env.SECRET_KEY, 
}))

/* ------------------------------------------------------- */

// Middleware for check user data from session

app.use(require('./src/middlewares/userControl'))  // routerlardan üstte çalışması gerekir

// Middleware for queryHandler (Search, Filter, Sort, Page)
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */

app.all('/', (req, res) => {
  res.send({
      message: 'Welcome to Blog Api',
      session: req.session,  // session modelinin oluşturmuş olduğu req.sessiondır. req.session kullanarak session data ekleme, silme, güncelleme vb yapacağız
      user: req.user,
      isLogin: (req.user ? true : false)
  })
})  

/* ------------------------------------------------------- */

// Routes
app.use(require("./src/routes/productsRouter"));

app.use(require('./src/routes/userRouter'))

app.use(require('./src/routes/authRouter'))


  /* ------------------------------------------------------- */

// Catch Errors:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));



// require("./src/helpers/dataCreate")()
//     .then((res) => console.log("Data synched"))
//     .catch((err) => console.error("Data could not synched"));

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
