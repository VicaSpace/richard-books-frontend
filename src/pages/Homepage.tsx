import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookHorizontalSlider from '../components/bookHorizontalSlider/BookHorizontalSlider'
import NavBar from '../utils/sharedComponents/navBar/NavBar'
import HeadingSection from '../components/headingSection/HeadingSection'
import PopularAuthors from '../components/popularAuthors/PopularAuthors'
import Premium from '../components/premium/Premium'

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
    <div className='homepage-container'>
      <HeadingSection />
      <BookHorizontalSlider books={books} />
      <Premium />
      <PopularAuthors authors={authors} />
      <NavBar />
    </div>
  )
}

export default HomePage
