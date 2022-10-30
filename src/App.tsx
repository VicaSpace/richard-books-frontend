import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import './App.css'
import BookPage from './pages/bookPage/BookPage'
import axios from 'axios'
import BookDetailPage from './pages/bookDetailPage/BookDetailPage'
import SearchPage from './pages/searchPage/SearchPage'

export interface Author {
  id: number
  name: string
  img: string
}

export interface Book {
  id: number
  name: string
  img: string
  genre: string
  description: string
  price: number
  Author: Author
}

const App: React.FC<{}> = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [authors, setAuthors] = useState<Author[]>([])

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} authors={authors} />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/books" element={<BookPage books={books} />} />
        <Route path="/books/:id" element={<BookDetailPage books={books} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
