#!/bin/sh
echo Enter version number:
read version
rm zotero-arxiv-doi-retriever-${version}.xpi
zip -r zotero-arxiv-doi-retriever-${version}.xpi chrome/* chrome.manifest install.rdf 
