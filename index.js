require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const Gateway = require('./routes/gateway');
const { Cors } = require('./middlewares/cors');
const { Logger } = require('./middlewares/logger');

//Setting port to run app
const PORT = process.env.PORT || 8000;

//Initializing app
const app = express();

//Enabling CORS
app.use(Cors);

//Enabling Logging if user OPTS
// if (process.env.ENABLE_HTTP_LOGGING) {
//     app.use(Logger);
// }

//Using bodyparser middleware
app.use(bodyParser.json());

//test route
app.get("/health/status", (req, res) => {
    res.send("Hello, Your gateway is up and running");
});

//Gateway Service Endpoint
app.use("/services", Gateway);

// app starts from here
app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});