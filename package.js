// Source: https://github.com/shantha-kumara/marked-wnl

Package.describe({
  name: "marked-wnl",
  summary: "A markdown parser and compiler. A version that preserve new lines.",
  version: "0.3.4",
  git: "https://github.com/shantha-kumara/meteor-marked-wnl.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files("marked.js");

  api.use("templating", "client", {weak: true});
  api.add_files('template-integration.js', 'client');
});
