import React, { useEffect, useState } from 'react'
import { Book } from '../../App'
import BookVerticalList from '../../components/bookVerticalList/BookVerticalList'
import ToggleSelector from '../../components/toggleSelector/ToggleSelector'
import NavBar from '../../utils/sharedComponents/navBar/NavBar'
import './BookPage.css'

const BookPage: React.FC<{ books: Book[] }> = ({ books }) => {
  const [displayBooks, setDisplayBooks] = useState(books)
  const [displayAll, setDisplayAll] = useState(true)

  useEffect(() => setDisplayBooks(books), [books])

  const onRatedBookClick = (): void => {
    setDisplayAll(true)
    setDisplayBooks(books)
  }

  const onBookmarkedClick = (): void => {
    setDisplayAll(false)
    const strBookmarkIds = localStorage.getItem('bookmark') ?? '[]'
    const bookmarkIds: number[] = JSON.parse(strBookmarkIds)
    const bookmarkedBooks = books.filter(book => bookmarkIds.includes(book.id))
    setDisplayBooks(bookmarkedBooks)
  }

  const onBookmarkIconClick = (id: number): void => {
    const strBookmarkIds = localStorage.getItem('bookmark') ?? '[]'
    const bookmarkIds: number[] = JSON.parse(strBookmarkIds)
    if (bookmarkIds.includes(id)) {
      const newBookmarkIds = bookmarkIds.filter(e => e !== id)
      localStorage.setItem('bookmark', JSON.stringify(newBookmarkIds))
    } else {
      bookmarkIds.push(id)
      localStorage.setItem('bookmark', JSON.stringify(bookmarkIds))
    }
  }

  return (
    <div className="bookpage-container">
      <h1>My Books</h1>
      <ToggleSelector
        displayAll={displayAll}
        onRatedBookClick={onRatedBookClick}
        onBookmarkedClick={onBookmarkedClick}
      />
      <BookVerticalList
        displayBooks={displayBooks}
        onBookmarkIconClick={onBookmarkIconClick}
      />
      <NavBar />
    </div>
  )
}

export default BookPage
