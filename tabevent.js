chrome.tabs.onCreated.addListener(function(){
  chrome.storage.sync.get('limit', function(settings){
    var tabLimit = settings.limit;

    chrome.tabs.query({'currentWindow': true, 'active': true}, function(tabs){
      var activeTabURL = tabs[0].url
      chrome.tabs.query({'currentWindow': true}, function(tabs){
        if(tabs.length >= tabLimit && activeTabURL.indexOf("alert.html") == -1 ){
          chrome.tabs.create({'url':'alert.html'});
        }
      });
    });
  });
});
