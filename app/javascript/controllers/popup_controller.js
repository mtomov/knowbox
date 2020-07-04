import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['newDialog', 'textarea']

  new() {
    this.newDialogTarget.open = true
  }

  copyToClipboard(event) {
    const el = event.currentTarget.parentElement
    navigator.clipboard.writeText(el.dataset.fullText)
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
    this.stimulate('SnippetsReflex#add', textareaValue)
  }

  afterAdd() {
    this.scroll(1)
  }

  scroll(delay = 10) {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, delay)
  }
}
