import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['newDialog', 'textarea']

  new() {
    this.newDialogTarget.open = true
  }

  copyToClipboard(event) {
    const el = event.currentTarget.parentElement
    navigator.clipboard.writeText(el.innerText)
  }

  search(event) {
    const searchString = event.srcElement.value
    this.stimulate('SnippetsReflex#search', searchString)
  }

  add(event) {
    if (event.detail.action != 'save') {
      return
    }

    const textareaValue = this.textareaTarget.value
    console.log('textareaValue ', textareaValue)
    this.stimulate('SnippetsReflex#add', textareaValue)
  }
}
