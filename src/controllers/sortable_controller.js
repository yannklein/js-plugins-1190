import { Controller } from '@hotwired/stimulus'
import Sortable from 'sortablejs';

export default class extends Controller {

  connect() {
    console.log('Hello from sortable_controller.js')

    // this.element refers to the HTML element 
    // that has the data-controller attribute (in our case the ul)
    Sortable.create(this.element, {
      ghostClass: "ghost",
      animation: 1500,
      onEnd: (event) => {
        // alert(`${event.oldIndex} moved to ${event.newIndex}`)
      }
    })
  }
}