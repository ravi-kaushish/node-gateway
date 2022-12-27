const services = require("../setup/services");

exports.Resolver = async (req, res, next) => {
  let service_config = services[req.params.service];
  if (!service_config) {
    res.status(404).send({
      message: "No such service exist..."
    });
  } else {
    next();
  }
};