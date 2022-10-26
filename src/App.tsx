import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import './App.css'
import { Provider } from 'react-redux'
import ReduxComponent from './redux/ReduxComponent'
import exampleStore from './redux/boilerplate/store'
import SearchPage from './searchpage/SearchPage'
import BookPage from './bookpage/BookPage'
import BookDetail from './bookpage/BookDetail'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC<{}> = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route
            path="/redux"
            element={
              <Provider store={exampleStore}>
                <ReduxComponent />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
