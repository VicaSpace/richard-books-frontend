import React from 'react'
import BookVerticalItem from '../bookVerticalItem/BookVerticalItem'
import './BookVerticalList.css'

const BookVerticalList: React.FC<{
  displayBooks: any
  onBookmarkIconClick: (id: number) => void
}> = ({ displayBooks, onBookmarkIconClick }) => {
  return (
    <div className='book-vertical-list-container'>
      {displayBooks.map((book: any) => (
        <BookVerticalItem
          key={book.id}
          book={book}
          onBookmarkIconClick={onBookmarkIconClick}
        />
      ))}
    </div>
  )
}

export default BookVerticalList
