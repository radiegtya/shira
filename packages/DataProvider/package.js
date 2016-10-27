Package.describe({
    name: "cybermantra:data-provider",
    summary: "Data Provider for easy data manipulation",
    description: "Cybermantra's cool plugins collection",
    version: "0.0.1",
    git: "https://github.com/radiegtya/shira.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'peerlibrary:reactive-field',
    ], 'client');

    api.use([
        'tmeasday:publish-counts@0.7.3'
    ], ['server', 'client']);

    api.addFiles([
        'DataProvider.js',
    ], 'client');

    api.export([
        'DataProvider'
    ], 'client');
});
