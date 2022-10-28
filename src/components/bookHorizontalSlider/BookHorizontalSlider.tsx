import { Container } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookItem from '../bookItem/BookItem'

export interface Book {
  id: number
  name: string
  authorName: string
  rating: number
  price: number
  genre: string
  description: string
  img: string
}

const BookHorizontalSlider: React.FC<{ books: Book[] }> = ({ books }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <Container>
      <Slider {...settings}>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </Slider>
    </Container>
  )
}

export default BookHorizontalSlider
