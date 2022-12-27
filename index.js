const express = require('express');
const { Cors } = require('./middlewares/cors');
const bodyParser = require('body-parser');
const Gateway = require('./routes/gateway');

//Setting port to run app
const PORT = process.env.PORT || 8000;

//Initializing app
const app = express();

//Enabling CORS
app.use(Cors);

//Using bodyparser middleware
app.use(bodyParser.json());

//test route
app.get("/health/status", (req, res) => {
    res.send("Hello, Your gateway is up and running");
});

app.use("/services", Gateway);

// app starts from here
app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});