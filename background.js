var menu_name = chrome.i18n.getMessage("contextMenuItemOnLink");

chrome.contextMenus.create({
  contexts: ['link'],
  title: menu_name,
  onclick: function(info, tab) {
    chrome.tabs.sendRequest(tab.id, 'copy', function(linkName) {
      var ta = document.getElementById('copy-area');
      ta.value = linkName;
      ta.select();
      document.execCommand("copy", false, null);
    });
  }
});
