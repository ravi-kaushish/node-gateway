const { Proxy } = require("../utils/axios");

const { resolver } = require("../utils/resolver");

exports.Gateway = async (req, res) => {
  let service = req.params.service;
  let resolved = await resolver(service);
  let url = req.url.replace(resolved.path, "");
  let response = await Proxy(`${resolved.root}${url}`, req.headers || {}, req.body || {}, req.method || 'GET');
  res.send(response.data);
};