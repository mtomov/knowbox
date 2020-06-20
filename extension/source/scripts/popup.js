import 'emoji-log'
import browser from 'webextension-polyfill'
import { fetchFromServer } from './popup/http_connection'

const path = '/scripts/popup'
fetchFromServer(path).then((popupScriptUrl) => {
  console.log('popupScriptUrl ', popupScriptUrl)

  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = popupScriptUrl
    script.onload = resolve
    document.getElementsByTagName('script')
    document.head.appendChild(script)
  })
})

// import '../styles/popup.scss'
console.emoji('🦄', 'hiii!')

function openWebPage(url) {
  return browser.tabs.create({ url })
}

document.addEventListener('DOMContentLoaded', async () => {
  const tabs = await browser.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  const url = tabs.length && tabs[0].url

  const response = await browser.runtime.sendMessage({
    msg: 'hello',
    url,
  })

  // eslint-disable-next-line no-console
  console.emoji('🦄', response)

  // document.getElementById('github__button').addEventListener('click', () => {
  //   return openWebPage(
  //     'https://github.com/abhijithvijayan/web-extension-starter'
  //   )
  // })

  // document.getElementById('donate__button').addEventListener('click', () => {
  //   return openWebPage('https://www.buymeacoffee.com/abhijithvijayan')
  // })

  // document.getElementById('options__button').addEventListener('click', () => {
  //   return openWebPage('options.html')
  // })
})
