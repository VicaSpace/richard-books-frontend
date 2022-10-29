import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import searchIcon from '../../../assets/search/search.png'
import homeIcon from '../../../assets/home/home.svg'
import bookIcon from '../../../assets/book/book.svg'
import dimmedSearchIcon from '../../../assets/search/search-dimmed.png'
import dimmedHomeIcon from '../../../assets/home/home-dimmed.svg'
import dimmedBookIcon from '../../../assets/book/book-dimmed.svg'
import './NavBar.css'

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="navbar-container">
      {location.pathname === '/'
        ? <img
          className="navbar-icon"
          src={homeIcon}
        />
        : <img
          className="navbar-icon"
          src={dimmedHomeIcon}
          onClick={() => navigate('/')}
        />
      }

      {location.pathname === '/search'
        ? <img
          className="navbar-icon"
          src={searchIcon}
        />
        : <img
          className="navbar-icon"
          src={dimmedSearchIcon}
          onClick={() => navigate('/search')}
        />
      }

      {location.pathname === '/books'
        ? <img
          className="navbar-icon"
          src={bookIcon}
        />
        : <img
          className="navbar-icon"
          src={dimmedBookIcon}
          onClick={() => navigate('/books')}
        />
      }
    </div>
  )
}

export default NavBar
