require('dotenv').config()
const express = require('express')
const gateway = require('./routes/gateway')
const services = require('./routes/gateway')
// const { Cors } = require('./middlewares/cors')
// const { Logger } = require('./middlewares/logger')
// const { RateLimiter } = require('./middlewares/rate-limiter')
// const { Auth } = require('./middlewares/auth')

//Setting port to run app
const PORT = process.env.PORT || 8000

//Initializing app
const app = express()

// Using bodyparser middleware
app.use(require('body-parser'))

// Enabling CORS
// app.use(Cors);

// // Enabling Logging if user OPTS
// if (process.env.ENABLE_HTTP_LOGGING) {
//   app.use(Logger)
// }

// Enabling Authentication if user OPTS
// if (process.env.AUTHENTICATION === 'enabled') {
//   app.use(Auth)
// }

// Enabling Rate Limiting if user OPTS
// if (process.env.ENABLE_HTTP_LOGGING) {
//   app.use(RateLimiter)
// }

gateway.start()

//Gateway Service Endpoint
app.use('/services', require('./routes/gateway'))
// app.use('/console', Gateway)
// app.use('/api', Gateway)

// Server Health
app.get('/server/health', (req, res) => {
  res.send('Hello, Your gateway is up and running')
})

// app starts from here
app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`)
})
