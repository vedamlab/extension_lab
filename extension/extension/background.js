/****
 * 1. whenver a tab is updated -> enter url , update url , reload page 
 * 2. you replace that with custom url 
 * 
 * 
 * **/

// whenver a tab is updated on chrome
// tabID
let blockList = [];
console.log("blockList", blockList)
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log('Tab updated:', tab.url, 'Status:', changeInfo.status);
    // url if we are on custom Page -> don't do anything 
    let url = tab.url;
    let strArr = url.split("/");
    let fileName = strArr[strArr.length - 1];
    if (fileName === "newTab.html") return;

    let result = new URL(url);
    let siteName = result.hostname;
    let shouldBlock = false;
    for (let i = 0; i < blockList.length; i++) {
        let cSiteName = blockList[i];
        console.log("cSiteName", cSiteName);
        // Ensure cSiteName is a string before calling trim
        let lowercSiteName = cSiteName.trim().toLowerCase();
        let lowSiteName = siteName.toLowerCase().split(".")[1];
        console.log("lowercSiteName", lowercSiteName, "lowSiteName",lowSiteName)
        if (lowSiteName == lowercSiteName) {
            shouldBlock = true;
            break;
        }
    }
    console.log("shouldBlock",shouldBlock)

    const blockedPageUrl = chrome.runtime.getURL('newTab.html');
    //  update it to your custom page
    if (changeInfo.status =="complete"&& shouldBlock == true) {
        chrome.tabs.update(tabId, { url: blockedPageUrl }, function () {
            console.log("Site updated");
        });
    }
})


// 
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // console.log("siteName", message.siteName);
    // console.log("blockList", blockList);
    if (message.siteName) {
        blockList.push(message.siteName);
        sendResponse({ success: true });
    }
    return true; // Indicates we will send a response asynchronously
})



