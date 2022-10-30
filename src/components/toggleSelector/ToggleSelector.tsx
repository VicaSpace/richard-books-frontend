import React from 'react'
import ToggleOption from '../toggleOption/ToggleOption'
import './ToggleSelector.css'

const ToggleSelector: React.FC<{
  displayAll: boolean
  onRatedBookClick: () => void
  onBookmarkedClick: () => void
}> = ({ displayAll, onRatedBookClick, onBookmarkedClick }) => {
  return (
    <>
      {
        displayAll
          ? <div className="toggle-selector-container">
          <ToggleOption onClick={onRatedBookClick} isSelected>
            Rated Books
          </ToggleOption>
          <ToggleOption onClick={onBookmarkedClick} isSelected={false}>
            Bookmarked
          </ToggleOption>
        </div>
          : <div className="toggle-selector-container">
          <ToggleOption onClick={onRatedBookClick} isSelected={false}>
            Rated Books
          </ToggleOption>
          <ToggleOption onClick={onBookmarkedClick} isSelected>
            Bookmarked
          </ToggleOption>
        </div>
      }
    </>
  )
}

export default ToggleSelector
