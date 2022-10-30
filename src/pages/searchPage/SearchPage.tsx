import React, { useState } from 'react'
import { Book } from '../../App'
import BookHorizontalSlider from '../../utils/sharedComponents/bookHorizontalSlider/BookHorizontalSlider'
import SearchSection from '../../components/searchSection/SearchSection'
import NavBar from '../../utils/sharedComponents/navBar/NavBar'
import './SearchPage.css'

const SearchPage: React.FC<{ books: Book[] }> = ({ books }) => {
  const [searchResults, setSearchResults] = useState<Book[]>([])

  const onSubmitFilterBook = (search: string): void => {
    setSearchResults(books.filter((book) => book.genre === search))
  }

  return (
    <div className="search-page-container">
      <SearchSection onSubmitFilterBook={onSubmitFilterBook} />
      <div className="search-page-slider-container">
        <div className="search-page-slider-heading">Search Results</div>
        <BookHorizontalSlider books={searchResults} />
      </div>
      <div className="search-page-slider-container">
        <div className="search-page-slider-heading">All Books</div>
        <BookHorizontalSlider books={books} />
      </div>
      <NavBar />
    </div>
  )
}

export default SearchPage
