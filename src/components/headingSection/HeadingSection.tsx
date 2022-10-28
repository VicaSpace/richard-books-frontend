import React from 'react'
import './HeadingSection.css'

const HeadingSection: React.FC<{}> = () => {
  return (
    <div className="heading-section-container">
      <div className="heading-section-vertical-divider">
        <h1>Hi Richard</h1>
        <p>What are you reading today?</p>
      </div>
      <img
        src="https://pbs.twimg.com/media/D8E8U37X4AA9OvW.jpg"
        alt="Richard"
        className="heading-section-img"
      />
    </div>
  )
}

export default HeadingSection
