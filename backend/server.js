// initialize .env variables
require("dotenv").config();
require('./config/db.connection')
///////////////////////////////
// DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')
const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const commentRoutes = require('./routes/comments');
const { PORT , } = process.env;


const app = express();
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api', imageRoutes);
app.use('/api', commentRoutes);

 
app.use(morgan("dev")); 


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

