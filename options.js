function saveSettings(){
  var tabLimit = document.getElementById('tabLimit').value;
  chrome.storage.sync.set({
    limit: tabLimit
  }, function(){
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function(){
      status.textContent = '';
    }, 2000);
  });
}

function restoreSettings() {
  chrome.storage.sync.get('limit', function(settings) {
    document.getElementById('tabLimit').value = settings.limit;
  });
}
document.addEventListener('DOMContentLoaded', restoreSettings);
document.getElementById('save').addEventListener('click', saveSettings);
