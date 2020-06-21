import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['newDialog', 'textarea']

  new() {
    this.newDialogTarget.open = true
  }

  add(event) {
    console.log('event ', event)

    if (event.detail.action != 'save') {
      return
    }

    const textareaValue = this.textareaTarget.value
    console.log('textareaValue ', textareaValue)
    this.stimulate('SnippetsReflex#add', textareaValue)
  }
}
