import { Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Book } from '../bookhorizontalslider/BookHorizontalSlider'

const BookCard: React.FC<{ book: Book, onBookmarkClick: (id: number) => void }> = ({ book, onBookmarkClick }) => {
  const bookmarkedIdsStr: string = localStorage.getItem('bookmarked') ?? '[]'
  const bookmarkedIds: number[] = JSON.parse(bookmarkedIdsStr)
  const [isBookmarked, setIsBookmarked] = useState(bookmarkedIds.includes(book.id))

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
      <Image src={book.img} alt={book.name} />
      <Text>{book.rating}</Text>
      <Text>{book.name}</Text>
      <Text>{book.authorName}</Text>
      <Text>{book.price}</Text>
      {!isBookmarked && <Button onClick={() => bookmark(book.id)}>Bookmark</Button>}
      {isBookmarked && <Button onClick={() => unbookmark(book.id)}>Unbookmark</Button>}
    </>
  )
}

export default BookCard
