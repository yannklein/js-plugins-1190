import { Application } from '@hotwired/stimulus'
import { definitionsFromContext } from '@hotwired/stimulus-webpack-helpers'

// initialize StimulusJS
// sih + tab
window.Stimulus = Application.start()
const context = require.context('./controllers', true, /\.js$/)
Stimulus.load(definitionsFromContext(context))
