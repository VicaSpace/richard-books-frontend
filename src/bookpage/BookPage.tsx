import { Button, Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Book } from '../components/bookHorizontalSlider/BookHorizontalSlider'
import DATA from '../homepage/data'
import NavBar from '../navbar/NavBar'
import BookCard from './BookCard'

const BookPage: React.FC<{}> = () => {
  const ratedBooks: Book[] = DATA.books
  const [books, setBooks] = useState(ratedBooks)

  const displayAllRatedBooks = (): void => {
    setBooks(ratedBooks)
  }

  const displayBookmarkedBooks = (): void => {
    const bookmarkedIdsStr: string = localStorage.getItem('bookmarked') ?? '[]'
    const bookmarkedIds: number[] = JSON.parse(bookmarkedIdsStr)
    setBooks(ratedBooks.filter((book) => bookmarkedIds.includes(book.id)))
  }

  const toggleBookmark = (id: number): void => {
    const bookmarkedIdsStr: string = localStorage.getItem('bookmarked') ?? '[]'
    const bookmarkedIds: number[] = JSON.parse(bookmarkedIdsStr)
    if (bookmarkedIds.includes(id)) {
      const newBookmarkedIds = bookmarkedIds.filter((e) => e !== id)
      localStorage.setItem('bookmarked', JSON.stringify(newBookmarkedIds))
      // setBooks(ratedBooks.filter((book) => newBookmarkedIds.includes(book.id)))
    } else {
      bookmarkedIds.push(id)
      localStorage.setItem('bookmarked', JSON.stringify(bookmarkedIds))
      // setBooks(ratedBooks.filter((book) => bookmarkedIds.includes(book.id)))
    }
  }

  return (
    <Container>
      <Heading>My Books</Heading>
      <Button onClick={displayAllRatedBooks}>Rated Books</Button>
      <Button onClick={displayBookmarkedBooks}>Bookmarked</Button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookCard book={book} onBookmarkClick={toggleBookmark} />
          </li>
        ))}
      </ul>
      <NavBar />
    </Container>
  )
}

export default BookPage
