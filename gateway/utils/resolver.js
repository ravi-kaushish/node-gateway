const services = require("./services");

exports.resolver = async (service) => {
  return services[service];
};