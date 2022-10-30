import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { Book } from '../../../App'
import './BookItem.css'

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate()

  return (
    <div className="book-item-container">
      <div className="book-item-rating-container">
        <div className="book-item-rating">
          <AiFillStar className="book-item-star" />
          4.5
        </div>
      </div>
      <img
        src={book.img}
        alt={book.name}
        className="book-item-img"
        onClick={() => navigate(`/books/${book.id}`)}
      />
      <div className="book-item-name">{book.name}</div>
      <div className="book-item-author">{book.Author.name}</div>
      <div className="book-item-price">
        <span className="book-item-emphasize">${book.price}</span>.00
      </div>
    </div>
  )
}

export default BookItem
