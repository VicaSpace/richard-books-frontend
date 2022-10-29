import React from 'react'
import './AuthorItem.css'

const AuthorItem: React.FC<{ author: any }> = ({ author }) => {
  return (
    <div className='author-item-container'>
      <img className='author-item-img' src={author.img} alt={author.name} />
      {author.name}
    </div>
  )
}

export default AuthorItem
