function sendMessage(message) {
  chrome.tabs.query({ active: !0, currentWindow: !0 }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { "type": "notifications", "data": message });
  });
}

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  if (message.type === "counter") {
    sendMessage(message.data);
  }
});