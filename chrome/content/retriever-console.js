var re = /name="citation_doi" content=(.*?)\/>/g

var s = new Zotero.Search();
s.libraryID = Zotero.Libraries.userLibraryID;

s.addCondition('url', 'contains', 'arxiv');
s.addCondition('url', 'doesNotContain', ' ');
s.addCondition('itemType', 'is', 'journalArticle');

var results = await s.search();
var items = await Zotero.Items.getAsync(results);
var DOIs = []
var titles = []

for(item of items){
    let url = item.getField('url');
  
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    text = req.response;
    if (text.match(re)!=null){
       DOI = re.exec(text)[1].replace(/\"/g, "");
     //  item.setField('DOI', DOI);
       let DOIurl = "https://doi.org/" + DOI;
       DOIs.push(DOIurl);
       titles.push(item.getField('title'))
    }
}

var s = ''
for (i=0; i<DOIs.length; i++){
   s += i+1 + ') "' + titles[i] + '", ' + DOIs[i]  + ';\n'
}


if(DOIs.length==0){
   alert('No published versions found.');
}
else
{
   alert('Found ' + DOIs.length + ' DOIs for your arXiv papers:\n\n' + s);
}

