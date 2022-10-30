import React from 'react'
import { Book } from '../../App'
import BookItem from '../bookItem/BookItem'
import './BookHorizontalSlider.css'

const BookHorizontalSlider: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div className="book-slider-container">
      {books.map((book) => (
        <div key={book.id} className="book-slider-item">
          <BookItem book={book} />
        </div>
      ))}
    </div>
  )
}

export default BookHorizontalSlider
