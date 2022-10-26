import { Action } from './actions'

export interface State {
  counter: number
}

const initialState: State = {
  counter: 0
}

const exampleReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    default:
      return state
  }
}

export default exampleReducer
