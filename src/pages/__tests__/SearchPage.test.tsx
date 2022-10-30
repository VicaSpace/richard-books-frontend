import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import SearchPage from '../searchPage/SearchPage'

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

describe('test search page', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <Routes>
          <Route path="/search" element={<SearchPage books={books} />} />
        </Routes>
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
