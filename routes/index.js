var keystone = require('keystone'),
    importRoutes = keystone.importer(__dirname),
    Capability = keystone.list('Capability'),
    Page = keystone.list('Page');

    // Bind Routes
exports = module.exports = function(app) {

  app.get('/', function(req, res){
    res.send('Hello World')
  });

  app.get('/capabilities', function(req, res){
    Capability.model.find().exec(function(err, capabilities) {
      res.json(capabilities)
    });
  });

  app.get('/pages', function(req, res){
    Page.model.find().exec(function(err, pages) {
      res.json(pages)
    });
  });
}
