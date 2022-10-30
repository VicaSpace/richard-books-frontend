import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { Book } from '../../App'
import './BookVerticalItem.css'
import { RiBookmarkFill } from 'react-icons/ri'

const BookVerticalItem: React.FC<{
  book: Book
  onBookmarkIconClick: (id: number) => void
}> = ({ book, onBookmarkIconClick }) => {
  const navigate = useNavigate()
  const [isBookmarked, setBookmark] = useState<boolean>(false)

  useEffect(() => {
    const strBookmarkIds = localStorage.getItem('bookmark') ?? '[]'
    const bookmarkIds: number[] = JSON.parse(strBookmarkIds)
    if (bookmarkIds.includes(book.id)) {
      setBookmark(true)
    }
  }, [])

  const onBookmarkIconClickHandler = (): void => {
    setBookmark(!isBookmarked)
    onBookmarkIconClick(book.id)
  }

  return (
    <div className="book-vertical-item-container">
      <div className="book-vertical-item-img">
        <img
          src={book.img}
          alt={book.name}
          onClick={() => navigate(`/books/${book.id}`)}
        />
      </div>
      <div className="book-vertical-item-middle">
        <div className="book-vertical-item-rating">
          <AiFillStar className="book-vertical-item-star" /> 5.0
        </div>
        <div className="book-vertical-item-name">{book.name}</div>
        <div className="book-vertical-item-author">{book.Author.name}</div>
      </div>
      <div className="book-vertical-item-right">
        <div className="book-vertical-item-bookmark-container">
          {isBookmarked
            ? (
            <RiBookmarkFill
              className="book-vertical-item-bookmark-yellow"
              onClick={onBookmarkIconClickHandler}
            />
              )
            : (
            <RiBookmarkFill
              className="book-vertical-item-bookmark"
              onClick={onBookmarkIconClickHandler}
            />
              )}
        </div>
        <div>
          <span className="book-vertical-item-emphasize">${book.price}</span>.00
        </div>
      </div>
    </div>
  )
}

export default BookVerticalItem
