Package.describe({
    name: "shira:grid-view",
    summary: "Create a cool bootstrap table gridView with sortable, and pagination without hazzle",
    description: "This is part of Shira Plugins",
    version: "0.0.7",
    git: "https://github.com/radiegtya/shira.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'templating',
        'jquery',
        'twbs:bootstrap@3.3.6',
        'reactive-dict',
        'shira:pagination@0.0.3',
        'shira:grid-sorter@0.0.2',
        'sacha:spin@2.3.1'
    ], 'client');

    api.use([
        'dburles:mongo-collection-instances@0.3.5',
        'tmeasday:publish-counts@0.7.3'
    ], ['server', 'client']);

    api.addFiles([
        'ShiraGridView.html',
        'ShiraGridView.js',
    ], 'client');

    api.addFiles([
        'ShiraGridViewServer.js',
    ], 'server');

    api.export([
        'ShiraGridView'
    ], 'client');
});
