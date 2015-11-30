var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Capability = new keystone.List('Capability', {label: 'Capability', track: true});

Capability.add({
    title: { type: String, initial: true, required: true, index: true },
    description: {type: Types.Markdown, height: 200},
});

Capability.register();
