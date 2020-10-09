require("raf/polyfill");
var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
if (!global.hasOwnProperty("window")) {
  const dom = new jsdom.JSDOM("<!doctype html><html><body></body></html>", {
    url: "http://localhost",
  });
  global.window = dom.window;
  global.document = dom.window.document;
  global.navigator = global.window.navigator;
  global.File = global.window.File;
}

// atob
global.atob = require("atob");

// HTML debugging helper
global.d = function d(node) {
  console.log(require("html").prettyPrint(node.outerHTML, { indent_size: 2 }));
};
