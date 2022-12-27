require('dotenv').config()
const rateLimit = require('express-rate-limit');

exports.RateLimiter = rateLimit({
  windowMs: (parseInt(process.env.RATE_LIMIT_WINDOW) || 1) * 60 * 1000, // 1 Minute
  max: parseInt(process.env.RATE_LIMIT_PER_WINDOW) || 10, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message: 'Too many API requests intercepted from this IP. Your API rate limit is exhausted, please try again after a minute',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});