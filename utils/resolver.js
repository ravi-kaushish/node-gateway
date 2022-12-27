const services = require("../setup/services");

exports.resolver = async (service) => {
  return services[service];
};