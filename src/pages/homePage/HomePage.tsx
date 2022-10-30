import React from 'react'
import BookHorizontalSlider from '../../utils/sharedComponents/bookHorizontalSlider/BookHorizontalSlider'
import NavBar from '../../utils/sharedComponents/navBar/NavBar'
import HeadingSection from '../../components/headingSection/HeadingSection'
import PopularAuthors from '../../components/popularAuthors/PopularAuthors'
import Premium from '../../components/premium/Premium'
import './HomePage.css'
import { Author, Book } from '../../App'

const HomePage: React.FC<{ books: Book[], authors: Author[] }> = ({
  books,
  authors
}) => {
  return (
    <div className="homepage-container">
      <HeadingSection />
      <BookHorizontalSlider books={books} />
      <Premium />
      <PopularAuthors authors={authors} />
      <NavBar />
    </div>
  )
}

export default HomePage
