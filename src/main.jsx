import { render } from 'preact'
import App from './app'
// import Worker from './worker?worker'

const worker = new Worker("/worker.js", { type: 'module' })

render(<App />, document.getElementById('app'))
