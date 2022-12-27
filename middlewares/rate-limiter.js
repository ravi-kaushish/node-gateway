require('dotenv').config()
const rateLimit = require('express-rate-limit');

exports.RateLimiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW * 60 * 1000 || 1 * 60 * 1000, // 1 Minute
  max: process.env.API_RATE_LIMIT, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message: 'Too many API requests intercepted from this IP, please try again after a minute',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});