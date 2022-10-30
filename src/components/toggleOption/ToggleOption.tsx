import React, { ReactNode } from 'react'
import './ToggleOption.css'

interface Props {
  children: ReactNode
  onClick: () => void
  isSelected: boolean
}

const ToggleOption: React.FC<Props> = (props) => {
  return (
    <>
      {props.isSelected
        ? <button className="toggle-option-button-selected" onClick={props.onClick}>
          {props.children}
        </button>

        : <button className="toggle-option-button-not-selected" onClick={props.onClick}>
          {props.children}
        </button>
      }
    </>
  )
}

export default ToggleOption
