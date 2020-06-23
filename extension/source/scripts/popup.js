import 'emoji-log'
import browser from 'webextension-polyfill'
import { fetchFromServer } from './popup/http_connection'

const path = '/scripts/popup'
fetchFromServer(path).then((popupScriptUrl) => {
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = popupScriptUrl
    script.onload = resolve
    document.getElementsByTagName('script')
    document.head.appendChild(script)
  })
})

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
  // console.emoji('🦄', response)
})
