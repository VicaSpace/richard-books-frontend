import React from 'react'
import { render } from '@testing-library/react'
import BookDetailPage from '../bookDetailPage/BookDetailPage'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

const books = [
  {
    id: 1,
    name: 'Book 1',
    img: 'img src',
    genre: 'Children',
    description: 'Description',
    price: 5,
    Author: {
      id: 1,
      name: 'John',
      img: "John's image"
    }
  },
  {
    id: 2,
    name: 'Book 2',
    img: 'img src',
    genre: 'Children',
    description: 'Description',
    price: 5,
    Author: {
      id: 1,
      name: 'John',
      img: "John's image"
    }
  }
]

describe('test book detail page', () => {
  it('should render page correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/books/1']}>
        <Routes>
          <Route path='/books/:id' element={<BookDetailPage books={books} />} />
        </Routes>
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
