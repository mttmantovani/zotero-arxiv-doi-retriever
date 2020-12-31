XPI     := zotero-arxiv-doi-retriever
VERSION := 0.0.1b

$(XPI)-$(VERSION).xpi:
    @rm -rf $@
    @zip -r $@ chrome chrome.manifest install.rdf
