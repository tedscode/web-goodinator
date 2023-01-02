chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({
        url: 'https://youtu.be/dQw4w9WgXcQ'
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if(tab.url.startsWith('chrome://') || tab.url.startsWith('about:')) return;
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
        },
        files: ['inject.js'],
    });
});