import React from 'react'
import Homepage from '../Homepage'
import { render, screen } from '@testing-library/react'

describe('snapshot testing homepage', () => {
  it('should render the homepage correctly', () => {
    const { container } = render(<Homepage showTitle />)
    expect(container).toMatchSnapshot()
  })
})

describe('title exist', () => {
  it('should exists', () => {
    render(<Homepage showTitle />)
    const title = screen.getByTestId('title-test')
    expect(title).toBeInTheDocument()
  })

  it('shoud not exists', () => {
    render(<Homepage showTitle={false} />)
    const title = screen.queryByTestId('title-test')
    expect(title).not.toBeInTheDocument()
  })
})
