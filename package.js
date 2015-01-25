Package.describe({
  name: 'flowkey:bowser',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Browser Detection for Meteor - powered by bowser js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/meteor-bowser.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('bowser/bowser.js');
  api.export('bowser');
});