XPI     := zotero-arxiv-doi-retriever
VERSION := $(shell grep em:version install.rdf | head -n 1 | sed -e 's/ *<em:version>//' -e 's/<\/em:version>//')

test:
	@echo $(VERSION)

$(XPI)-$(VERSION).xpi:
	@rm -rf $@
	@zip -r $@ chrome chrome.manifest install.rdf
