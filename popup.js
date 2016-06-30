document.addEventListener("DOMContentLoaded", function(){
  var tabCountText = document.getElementById('tabCount');
  var tabCount = chrome.tabs.query({'currentWindow':true}, function(tabs){
    tabCountText.innerHTML = "You have " + tabs.length + " tabs open.";
  });
});
