# Zotero DOI retriever for arXiv papers

This repository aims at developing a simple extension to check within your [Zotero](https://github.com/zotero/zotero) library for arXiv papers without DOI, and look whether they have been updated with a functioning one.

### To do
Make this a working Zotero extension. 

For now: 
  * Copy-paste the content of [`chrome/content/retriever-console.js`](chrome/content/retriever-console.js) to the JavaScript console (**Tools &rarr; Developer &rarr; Run JavaScript** in the Zotero menu). You will have to add manually the DOIs to the articles though.
  * You can also have a look at a [Jupyter notebook](pyzotero/pyzotero-doi-retriever.ipynb) example that uses [pyzotero](https://github.com/urschrei/pyzotero) to obtain the missing DOIs, and will additionally update automatically the items in the library with the missing DOI.
