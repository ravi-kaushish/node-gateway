const axios = require('axios').default;

exports.Proxy = async (URL, headers = {}, data = {}, method = 'GET') => {
  try {
    let response = await axios(URL, {
      method, headers, data
    })
      .catch(err => {
        return err;
      });
    return response;
  }
  catch (e) {
    return e;
  }
};