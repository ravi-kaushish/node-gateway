const express = require('express')
const router = express.Router()

//Importing Handlers
const {
  gatewayStatus,
  getServiceConfig,
  validateRequestAgainstServiceConfig
} = require('../middlewares/gateway.js')
const { proxyHTTPRequest } = require('../controllers/proxy.js')

//Defining Routes
router.all(
  '/:service/*',
  gatewayStatus,
  getServiceConfig,
  validateRequestAgainstServiceConfig,
  proxyHTTPRequest
)

module.exports = router
