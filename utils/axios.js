const axios = require('axios').default;

exports.Proxy = async (URL, headers = {}, data = {}, method = 'GET') => {
  try {
    let response = await axios(URL, {
      method,
      headers,
      data
    })
    return response;
  }
  catch (err) {
    if (err.response) {
      return err.response;
    } else if (err.request) {
      return err.request;
    } else {
      return err;
    }
  }
};