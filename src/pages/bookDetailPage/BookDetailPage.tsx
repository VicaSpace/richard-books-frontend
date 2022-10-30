import React, { useEffect, useState } from 'react'
import { RiBookmarkFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router'
import { Book } from '../../App'
import { IoIosArrowBack } from 'react-icons/io'
import './BookDetailPage.css'
import { AiFillStar } from 'react-icons/ai'

const BookDetailPage: React.FC<{ books: Book[] }> = ({ books }) => {
  const { id } = useParams<string>()
  const [book, setBook] = useState<Book | undefined>()
  const [isBookmarked, setBookmark] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof id === 'undefined') {
      return
    }
    const selectedBook = books.filter((e) => e.id === parseInt(id, 10))[0]
    setBook(selectedBook)
  }, [books])

  useEffect(() => {
    if (typeof book === 'undefined') {
      return
    }
    const strBookmarkIds = localStorage.getItem('bookmark') ?? '[]'
    const bookmarkIds: number[] = JSON.parse(strBookmarkIds)
    if (bookmarkIds.includes(book.id)) {
      setBookmark(true)
    }
  }, [book])

  const onBookmarkIconClickHandler = (): void => {
    if (typeof book === 'undefined') {
      return
    }
    setBookmark(!isBookmarked)
    const strBookmarkIds = localStorage.getItem('bookmark') ?? '[]'
    const bookmarkIds: number[] = JSON.parse(strBookmarkIds)
    if (bookmarkIds.includes(book.id)) {
      const newBookmarkIds = bookmarkIds.filter((e) => e !== book.id)
      localStorage.setItem('bookmark', JSON.stringify(newBookmarkIds))
    } else {
      bookmarkIds.push(book.id)
      localStorage.setItem('bookmark', JSON.stringify(bookmarkIds))
    }
  }

  return (
    <>
      {typeof book === 'undefined'
        ? (
        <>Error</>
          )
        : (
        <div className="book-detail-container">
          <div className="book-detail-op-bar">
            <IoIosArrowBack
              className="book-detail-back"
              onClick={() => navigate(-1)}
              size="1.5rem"
            />
            <div className="book-detail-bookmark-container">
              {isBookmarked
                ? (
                <RiBookmarkFill
                  className="book-detail-bookmark-yellow"
                  onClick={onBookmarkIconClickHandler}
                  size="1.5rem"
                />
                  )
                : (
                <RiBookmarkFill
                  className="book-detail-bookmark"
                  onClick={onBookmarkIconClickHandler}
                  size="1.5rem"
                />
                  )}
            </div>
          </div>
          <div className="book-detail-cover">
            <img src={book.img} alt={book.name} />
          </div>
          <div className="book-detail-info">
            <p className="book-detail-name">{book.name}</p>
            <p className="book-detail-author">{book.Author.name}</p>
            <div className="book-detail-rating">
              <AiFillStar className='book-detail-star' />
              <AiFillStar className='book-detail-star' />
              <AiFillStar className='book-detail-star' />
              <AiFillStar className='book-detail-star' />
              <AiFillStar className='book-detail-star' />
              <span className='book-detail-emp'>5.0</span>
              <span className='book-detail-norm'>/ 5.0</span>
            </div>
            <p className="book-detail-description">{book.description}</p>
          </div>
          <div className="book-detail-button">
            <button>Buy Now for ${book.price}</button>
          </div>
        </div>
          )}
    </>
  )
}

export default BookDetailPage
