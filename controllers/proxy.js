const { Proxy } = require('../gateway/utils/http-client')

const { resolver } = require('../gateway/utils/resolver')

exports.proxyHTTPRequest = async (req, res) => {
  let service = await resolver(req.params.service)
  let url = req.url.replace(service.path, '')
  let response = await Proxy(
    `${service.root}${url}`,
    req.headers || {},
    req.body || {},
    req.method || 'GET'
  )
  Object.keys(response.headers).forEach(header => {
    res.setHeader(header, response.headers[header])
  })
  res.status(response.status)
  res.send(response.data)
}
