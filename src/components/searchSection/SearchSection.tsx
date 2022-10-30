import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiSearchLine } from 'react-icons/ri'
import './SearchSection.css'

const SearchSection: React.FC<{
  onSubmitFilterBook: (searchPhrase: string) => void
}> = ({ onSubmitFilterBook }) => {
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const [recentSearch, setRecentSeach] = useState<string[]>([])

  useEffect(() => {
    const strRecentSearch = localStorage.getItem('recent-search') ?? '[]'
    setRecentSeach(JSON.parse(strRecentSearch))
  }, [])

  const onSubmitSearchHandler = (): void => {
    if (recentSearch.length === 5) {
      recentSearch.pop()
    }
    recentSearch.unshift(searchPhrase)
    setRecentSeach(recentSearch)
    localStorage.setItem('recent-search', JSON.stringify(recentSearch))
    onSubmitFilterBook(searchPhrase)
  }

  const onRecentSearchClick = (search: string): void => {
    setSearchPhrase(search)
    onSubmitFilterBook(search)
  }

  const onRemoveRecentSearch = (search: string): void => {
    const newRecentSearch = recentSearch.filter((e) => e !== search)
    setRecentSeach(newRecentSearch)
    const toWrite =
      newRecentSearch.length === 0 ? '[]' : JSON.stringify(recentSearch)
    localStorage.setItem('recent-search', toWrite)
    setSearchPhrase('')
  }

  return (
    <div className="search-section-container">
      <form
        className="search-section-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <RiSearchLine
          className="search-section-icon"
          size="0.66rem"
          onClick={onSubmitSearchHandler}
        />
        <input
          placeholder="Search"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
      </form>
      <div className="search-section-recent-search-container">
        <div className="search-section-recent-search-heading">
          Recent Searches
        </div>
        <div className="search-section-recent-search">
          {recentSearch.map((search) => (
            <div key={search} className="search-section-recent-search-item">
              <span onClick={() => onRecentSearchClick(search)}>{search}</span>
              <RiCloseFill
                className="search-section-recent-search-close-icon"
                size="1rem"
                onClick={() => onRemoveRecentSearch(search)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSection
