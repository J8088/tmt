'use strict';

module.exports = function (app) {

  function setupRoutes() {
    app.all('/:url(a|auth)/*', function (req, res, next) {
      next();
    });

    app.use('/a/products', require('./a/products'));
    app.use('/a/product', require('./a/products'));

    app.route('/:url(a|auth|components|app|bower_components|assets)/*')
      .get(function pageNotFound(req, res) {
        var viewFilePath = '404';
        var statusCode = 404;
        var result = {
          status: statusCode
        };

        res.status(result.status);
        res.render(viewFilePath, function (err) {
          if (err) {
            return res.status(result.status).json(result);
          }

          res.render(viewFilePath);
        });
      });

    // All other routes should redirect to the index.html
    var indexHtml = app.get('clientRoot') + '/index.html';
    app.route('/*')
      .get(function (req, res) {
        // req.session.id = uuid.v1();
        res.sendFile(indexHtml);
      });
  }
  setupRoutes();
};
