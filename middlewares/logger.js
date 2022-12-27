const morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var rfs = require('rotating-file-stream');// version 2.x

exports.Logger = morgan(':method :url :status :res[content-length] - :response-time ms', {
  //stream: fs.createWriteStream(path.join(__dirname, '../data/http-logs/access.log'), { flags: 'a' })
  stream: rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, '../data/http-logs')
  })
});