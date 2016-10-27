Package.describe({
    name: "cybermantra:grid-view",
    summary: "Create a cool bootstrap table gridView with sortable, and pagination without hazzle",
    description: "Cybermantra's cool plugins collection",
    version: "0.0.1",
    git: "https://github.com/radiegtya/shira.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'peerlibrary:blaze-components',
        'jquery',
        'twbs:bootstrap@3.3.6',
        'peerlibrary:reactive-field',
        'sacha:spin@2.3.1',
    ], 'client');

    api.use([
        'tmeasday:publish-counts@0.7.3'
    ], ['server', 'client']);

    api.addFiles([
        'GridView.html',
        'GridView.js',
    ], 'client');

    api.export([
        'CybermantraGridViewStore'
    ], 'client');
});
