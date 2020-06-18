import 'emoji-log'
import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener(() => {
  // eslint-disable-next-line no-console
  console.emoji('🦄', 'onInstalled....')
})

browser.runtime.onMessage.addListener((request, _sender, _sendResponse) => {
  // Do something with the message!
  // alert(request.url);

  console.log(request)

  // And respond back to the sender.
  return Promise.resolve('got your message, thanks!')
})

// const onCreated = () => {
//   console.log('created')
// }

// function onClickHandler(info, tab) {
//   console.log('item ' + info.menuItemId + ' was clicked')
//   console.log('info: ' + JSON.stringify(info))
//   console.log('tab: ' + JSON.stringify(tab))
// }

// browser.contextMenus.create(
//   {
//     id: 'remove-me',
//     title: 'Remove Me!',
//     contexts: ['selection'],
//   },
//   onCreated
// )

// browser.contextMenus.onClicked.addListener(onClickHandler)
