export interface Action {
  type: string
}

const increaseAction = (): Action => {
  return {
    type: 'INCREMENT'
  }
}

export default increaseAction
