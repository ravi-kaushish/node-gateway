const express = require("express");
const router = express.Router();
const {RateLimiter} = require("../middlewares/rate-limiter")
const {Logger} = require("../middlewares/logger")

//Importing Handlers
const { Gateway } = require("../controllers/gateway.js");
const { Resolver } = require("../middlewares/resolver.js");

//Defining Routes
router.all("/:service/*", Logger, Resolver, RateLimiter, Gateway);

module.exports = router;