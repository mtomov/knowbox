import { fetchFromServer } from 'scripts/popup/http_connection'
import CableReady from 'cable_ready'

// import '@webcomponents/webcomponentsjs'
import '@material/mwc-button'
import '@material/mwc-fab'
import '@material/mwc-dialog'
import '@material/mwc-textfield'
import '@material/mwc-textarea'

fetchFromServer('/snippets').then((html) => {
  const popupElement = document.body

  CableReady.DOMOperations.innerHtml({
    element: popupElement,
    html,
  })
})
