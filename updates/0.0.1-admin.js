var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@example.com',
        password: 'root',
        canAccessKeystone: true
    }).save(done);

};
