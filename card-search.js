console.log(`Hi, it's currently ${Date.now()}`);

searchTcgPlayer = function(phrase, tab) {
    let raw = phrase.selectionText;
    let parsed = raw.replace(' ', '+');
    console.log(`Phrase ${parsed} was highlighted`);
    chrome.tabs.create({
        url: `https://www.tcgplayer.com/search/all/product?q=`+parsed+`&view=grid`
    });
}

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
        id: "tcgsearch",
        title: "Search in TCGPlayer",
        contexts:['selection']
    });
});

chrome.contextMenus.onClicked.addListener(
    searchTcgPlayer
);