Package.describe({
    name: "shira:pagination",
    summary: "Create a cool bootstrap pagination without hazzle",
    description: "This is part of shira:grid-view",
    version: "0.0.4",
    git: "https://github.com/radiegtya/shira.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'templating',
        'twbs:bootstrap@3.3.6',
        'reactive-dict'
    ], 'client');

    api.addFiles([
        'ShiraPagination.html',
        'ShiraPagination.js',
    ], 'client');

    api.export([
        'ShiraPagination'
    ], 'client');
});
