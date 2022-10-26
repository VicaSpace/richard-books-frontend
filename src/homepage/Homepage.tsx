import React from 'react'
import './Homepage.css'

const Homepage: React.FC<{ showTitle: boolean }> = ({ showTitle }) => {
  return (
    <div className="homepage-title">
      {showTitle && <p data-testid="title-test">Hello</p>}
      <p>Homepage</p>
    </div>
  )
}

export default Homepage
