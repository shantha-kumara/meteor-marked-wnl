if (Package.templating) {
  var Template = Package.templating.Template;
  var HTML = Package.htmljs.HTML; // implied by `ui`
  var Blaze = Package.blaze.Blaze; // implied by `ui`

  Blaze.registerHelper('markdown_wnl', Blaze.Template('markdown_wnl', function () {
    var view = this;
    var content = '';
    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    return HTML.Raw(marked(content));
  }));
}
