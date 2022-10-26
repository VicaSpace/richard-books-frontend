import { Container } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookHorizontalSlider from '../bookhorizontalslider/BookHorizontalSlider'
import NavBar from '../navbar/NavBar'
import HeadingSection from './HeadingSection'
import PopularAuthors from './PopularAuthors'
import Premium from './Premium'

const HomePage: React.FC<{}> = () => {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => console.log(err))
    axios
      .get('http://localhost:3001/api/authors')
      .then((res) => {
        setAuthors(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

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
