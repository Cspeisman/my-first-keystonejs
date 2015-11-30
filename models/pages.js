var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Page = keystone.List('Page');

Page.add({
    title: {type: String},
    content: {type: String}
  });

Page.register();
