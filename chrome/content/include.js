// Only create main object once
if (!Zotero.DOIRetriever) {
	let loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
	loader.loadSubScript("chrome://zotero-arxiv-doi-retriever/content/retriever.js");
}

window.addEventListener('load', function(e) { Zotero.DOIRetriever.init(); }, false);
