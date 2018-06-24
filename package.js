Package.describe({
  name: 'kingjuli:remote-configs',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.3');
  api.use('ecmascript');
  api.mainModule('remote-configs.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kingjuli:remote-configs');
  api.mainModule('remote-configs-tests.js');
});
