var keystone = require('keystone');

keystone.init({
  'name': 'my-keystone',
  'static': ['public'],
  'auto update': true,
  'mongo': 'mongodb://localhost/my-keystone',
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'foofoofooo'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start()
