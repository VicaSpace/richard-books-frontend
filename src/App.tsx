import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import './App.css'
import SearchPage from './searchpage/SearchPage'
import BookPage from './bookpage/BookPage'
import BookDetail from './bookpage/BookDetail'

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
