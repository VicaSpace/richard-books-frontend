import { Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Book } from '../bookhorizontalslider/BookHorizontalSlider'
import bookmarkImg from './bookmark.png'
import bookmarkYellowImg from './bookmark-yellow.png'

const BookCard: React.FC<{
  book: Book
  onBookmarkClick: (id: number) => void
}> = ({ book, onBookmarkClick }) => {
  const bookmarkedIdsStr: string = localStorage.getItem('bookmarked') ?? '[]'
  const bookmarkedIds: number[] = JSON.parse(bookmarkedIdsStr)
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarkedIds.includes(book.id)
  )
  const navigate = useNavigate()

  const unbookmark = (id: number): void => {
    onBookmarkClick(id)
    setIsBookmarked(false)
  }

  const bookmark = (id: number): void => {
    onBookmarkClick(id)
    setIsBookmarked(true)
  }

  return (
    <>
      <Image
        src={book.img}
        alt={book.name}
        onClick={() => navigate(`/books/${book.id}`)}
      />
      <Text>{book.rating}</Text>
      <Text>{book.name}</Text>
      <Text>{book.authorName}</Text>
      <Text>{book.price}</Text>
      {!isBookmarked && (
        <Image
          src={bookmarkImg}
          alt="bookmark"
          w="20px"
          onClick={() => bookmark(book.id)}
        />
      )}
      {isBookmarked && (
        <Image
          src={bookmarkYellowImg}
          alt="bookmark-yellow"
          w="20px"
          onClick={() => unbookmark(book.id)}
        />
      )}
    </>
  )
}

export default BookCard
