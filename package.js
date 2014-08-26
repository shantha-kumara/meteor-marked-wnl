// Source: https://github.com/shantha-kumara/marked-wnl

Package.describe({
  summary: "A markdown parser and compiler. A version that preserve new lines."
});

Package.on_use(function (api) {
  api.add_files("marked.js");

  api.use("templating", "client", {weak: true});
  api.add_files('template-integration.js', 'client');
});
