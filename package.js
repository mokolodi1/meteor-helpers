Package.describe({
  name: "mokolodi1:helpers",
  version: "0.0.7",
  // Brief, one-line summary of the package.
  summary: "General template and code helpers",
  // URL to the Git repository containing the source code for this package.
  git: "",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use("templating", "client");
  api.use("momentjs:moment@2.10.6");
  api.export("Template", "client");

  api.addFiles("client.js", "client");

  api.addFiles("server.js", "server");
  api.export("Moko", "server");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("mokolodi1:helpers");
  api.addFiles("helpers-tests.js");
});
