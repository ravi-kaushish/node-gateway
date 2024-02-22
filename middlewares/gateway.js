const services = require('../gateway/utils/services')

exports.gatewayStatus = async (req, res, next) => {
  let service_config = services[req.params.service]
  if (!service_config) {
    res.status(404).send({
      message: 'No such service exist...'
    })
  } else {
    next()
  }
}

exports.validateRequestAgainstServiceConfig = async (req, res, next) => {
  let service_config = services[req.params.service]
  if (!service_config) {
    res.status(404).send({
      message: 'No such service exist...'
    })
  } else {
    next()
  }
}
