# js
#deferLoading

Usage:

document : DOM.

tag: tag of element to be created currently is always "script".

jsUlr: url of the js you want to load.

uniqueName: unique name of the js to be load this value is to indentify the js.

[dependencyList]: is a list of js thats the js needs before be load, the list is the uniqueName given to the js.



Example.

deferLoading(document, 'script', '../js/jquery.min.js', 'jquery');

deferLoading(document, 'script', '../js/custom.min.js', 'custom',['jquery']);

deferLoading(document, 'script', '..js/customJS.min.js','customJS', ['jquery', 'custom']);
