import { Controller } from '@hotwired/stimulus'

// sch + tab
export default class extends Controller {
  static targets = [ 'reset', 'click' ]

  connect() {
    // console.log('Hello from disable_button_controller.js')
    // console.log(this.resetTarget)
  }

  // callback method (like in addEventListener)
  disable(event) {
    // console.log("button clicked")
    const clickedElement = event.currentTarget
    clickedElement.innerText = "☠️"
    clickedElement.classList.add("disabled")
    // show up reset button
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    // console.log("enable!");
    this.resetTarget.classList.add("d-none")
    this.clickTarget.innerText = "Click me again"
    this.clickTarget.classList.remove("disabled")
  }
}