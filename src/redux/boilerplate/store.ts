import { createStore } from 'redux'
import exampleReducer from './reducer'

const exampleStore = createStore(exampleReducer)

export default exampleStore
