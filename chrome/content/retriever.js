if (typeof Zotero === 'undefined') {
    Zotero = {};
}

Zotero.DOIRetriever = {};

// Initialization of plugin
Zotero.DOIRetriever.init = function() {
    Zotero.DOIRetriever.resetState("initial");

    var notifierID = Zotero.Notifier.registerObserver(
        Zotero.DOIRetriever.notifierCallback, ['item']
    );
    
    window.addEventListener('unload', function(e) {
        Zotero.Notifier.unregisterObserver(notifierID);
    }, false);
};

// Notifier
Zotero.DOIRetriever.notifierCallback...

// Checks item
Zotero.DOIRetriever.checkItem = function() {

};


