import { Container } from '@chakra-ui/react'
import React from 'react'

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
    <Container>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name}, {book.authorName}, {book.rating}, {book.price}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default BookHorizontalSlider
