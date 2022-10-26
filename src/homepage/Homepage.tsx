import { Container } from '@chakra-ui/react'
import React from 'react'
import BookHorizontalSlider, {
  Book
} from '../bookhorizontalslider/BookHorizontalSlider'
import HeadingSection from './HeadingSection'
import PopularAuthors, { Author } from './PopularAuthors'
import Premium from './Premium'

const HomePage: React.FC<{}> = () => {
  const books: Book[] = [
    {
      id: 1,
      name: 'Book name',
      authorName: 'John',
      rating: 5,
      price: 10
    },
    {
      id: 2,
      name: 'Book name',
      authorName: 'John',
      rating: 5,
      price: 10
    }
  ]

  const authors: Author[] = [
    {
      id: 1,
      name: 'John',
      img: 'text'
    },
    {
      id: 2,
      name: 'John',
      img: 'text'
    }
  ]

  return (
    <Container>
      <HeadingSection />
      <BookHorizontalSlider books={books} />
      <Premium />
      <PopularAuthors authors={authors} />
    </Container>
  )
}

export default HomePage
