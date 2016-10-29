Package.describe({
    name: 'cybermantra:grid-sorter',
    version: '0.0.1',
    summary: 'package for Table sorter. This is a part of shira:grid-view',
    git: 'https://github.com/radiegtya/shira',
    documentation: 'README.md'
});

Package.onUse(function(api) {

    api.versionsFrom('1.2.0.2');

    api.use([
        'templating',
    ], 'client');

    api.addFiles([
        'GridSorter.js',
        'GridSorter.css',
    ], 'client');

    api.export([
        'CybermantraGridSorter',
    ], 'client');

});
