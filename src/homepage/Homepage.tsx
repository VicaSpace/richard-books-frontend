import { Container } from '@chakra-ui/react'
import React from 'react'
import BookHorizontalSlider, {
  Book
} from '../bookhorizontalslider/BookHorizontalSlider'
import NavBar from '../navbar/NavBar'
import DATA from './data'
import HeadingSection from './HeadingSection'
import PopularAuthors, { Author } from './PopularAuthors'
import Premium from './Premium'

const HomePage: React.FC<{}> = () => {
  const books: Book[] = DATA.books
  const authors: Author[] = DATA.authors

  return (
    <Container>
      <HeadingSection />
      <BookHorizontalSlider books={books} />
      <Premium />
      <PopularAuthors authors={authors} />
      <NavBar />
    </Container>
  )
}

export default HomePage
