function create_popup(message) {
  
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.cssText = "position:fixed;bottom:20px;right:20px;width:200px;height:90px;background-color:rgba(35,68,128);z-index:9999;text-align:center;font-size:13px;padding:10px;border-radius: 10px;box-shadow: 0px 0px 5px #888888; display: flex; align-items: center; justify-content: center; flex-direction: column;";
    var messageItem = document.createElement("message-item");
    messageItem.innerHTML = message;
    messageItem.style.cssText = "margin: 0; padding-right:10px; color: white";

    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = "<p>✖︎</p>";
    closeBtn.style.cssText = "position:absolute;top:0;right:10px;cursor:pointer;";

    popup.appendChild(messageItem);
    popup.appendChild(closeBtn);
    document.body.appendChild(popup);
    closeBtn.addEventListener("click", function () {
      popup.remove();
    });
    setTimeout(function () {
      popup.remove();
    }, 3000);
  
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "notifications") {
    create_popup(message.data);
  }
});

