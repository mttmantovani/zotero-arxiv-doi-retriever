XPI     := zotero-arxiv-doi-retriever
VERSION := $(shell grep --color=never em:version install.rdf | head -n 1 | sed -E 's/^ *em:version="(.*)"/\1/')
	
$(XPI)-$(VERSION).xpi: FORCE
	@rm -rf $@
	@zip -r $@ chrome chrome.manifest install.rdf

FORCE:
