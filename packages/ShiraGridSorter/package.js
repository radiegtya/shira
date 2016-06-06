Package.describe({
    name: 'shira:grid-sorter',
    version: '0.0.3',
    summary: 'package for Table sorter. This is a part of shira:grid-view',
    git: 'https://github.com/radiegtya/shira',
    documentation: 'README.md'
});

Package.onUse(function(api) {

    api.versionsFrom('1.2.0.2');

    api.use([
        'reactive-dict',
        'templating',
    ], 'client');

    api.addFiles([
        'ShiraGridSorter.js',
        'ShiraGridSorter.css',
    ], 'client');

    api.export([
        'ShiraGridSorter',
    ], 'client');

});
