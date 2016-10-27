Package.describe({
    name: "cybermantra:pagination",
    summary: "Create a cool bootstrap pagination without hazzle",
    description: "This is part of shira:grid-view",
    version: "0.0.1",
    git: "https://github.com/radiegtya/shira.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'peerlibrary:blaze-components',
        'twbs:bootstrap@3.3.6',
        'session'
    ], 'client');

    api.addFiles([
        'Pagination.html',
        'Pagination.js',
    ], 'client');

    api.export([
        'CybermantraPaginationStore'
    ], 'client');
});
