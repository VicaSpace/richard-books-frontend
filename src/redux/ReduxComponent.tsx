import React from 'react'
import { useSelector } from 'react-redux'
import increaseAction from './boilerplate/actions'
import { State } from './boilerplate/reducer'
import exampleStore from './boilerplate/store'

const ReduxComponent: React.FC<{}> = () => {
  const { dispatch } = exampleStore
  const counter = useSelector((state: State) => state.counter)

  const increase = (): void => {
    dispatch(increaseAction())
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
    </>
  )
}

export default ReduxComponent
