require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const Gateway = require('./routes/gateway');
const { Cors } = require('./middlewares/cors');
const { Logger } = require('./middlewares/logger');
const { RateLimiter } = require('./middlewares/rate-limiter');
const { Auth } = require('./middlewares/auth');

//Setting port to run app
const PORT = process.env.PORT || 8000;

//Initializing app
const app = express();

//Enabling CORS
app.use(Cors);

//test route
app.get("/health/status", (req, res) => {
    res.send("Hello, Your gateway is up and running");
});

//Using bodyparser middleware
app.use(bodyParser.json());


// Enabling Logging if user OPTS
if (process.env.ENABLE_HTTP_LOGGING) {
    app.use(Logger);
};

// Enabling Authentication if user OPTS
if (process.env.AUTHENTICATION === "enabled") {
    app.use(Auth);
};

// Enabling Rate Limiting if user OPTS
if (process.env.ENABLE_HTTP_LOGGING) {
    app.use(RateLimiter);
};

//Gateway Service Endpoint
app.use("/services", Gateway);

// app starts from here
app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});