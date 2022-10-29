import React from 'react'
import AuthorItem from '../authorItem/AuthorItem'
import './PopularAuthors.css'

export interface Author {
  id: number
  img: string
  name: string
}

const PopularAuthors: React.FC<{ authors: Author[] }> = ({ authors }) => {
  return (
    <div className='popular-author-container'>
      <h2 className="popular-author-heading">Popular Authors</h2>
      <div className="popular-author-img-container">
        {authors.map((author) => (
          <AuthorItem key={author.id} author={author} />
        ))}
      </div>
    </div>
  )
}

export default PopularAuthors
