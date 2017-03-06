'use strict';

var config = require('./env');


module.exports = function (app) {
  if (config.debug) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  function setupServer() {
    var server = null;

    server = require('http').createServer(app);
    server.listen(config.http.port, function () {
      console.log('Express server listening on port', {port: config.http.port});
    });
  }
  setupServer();
};
