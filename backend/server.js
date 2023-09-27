// initialize .env variables
require("dotenv").config();
require('./config/db.connection')
///////////////////////////////
// DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')
const express = require('express');
const imageRoutes = require('./routes/imageRoutes');

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT , } = process.env;

// create application object
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api', imageRoutes);

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

