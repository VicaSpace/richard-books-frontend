import React from 'react'
import BookItem from '../bookItem/BookItem'
import './BookHorizontalSlider.css'

export interface Book {
  id: number
  name: string
  authorName: string
  rating: number
  price: number
  genre: string
  description: string
  img: string
}

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
