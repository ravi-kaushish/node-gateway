const axios = require('axios').default

exports.Proxy = async (URL, headers = {}, data = {}, method = 'GET') => {
  try {
    return await axios({
      method,
      url: URL,
      headers,
      data
    })
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response || err.request || err
    } else {
      return err
    }
  }
}
