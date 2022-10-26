import { Heading } from '@chakra-ui/react'
import React from 'react'
import AuthorItem from './AuthorItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export interface Author {
  id: number
  img: string
  name: string
}

const PopularAuthors: React.FC<{ authors: Author[] }> = ({ authors }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <Heading
        fontFamily="Average"
        fontWeight="400"
        fontSize="16px"
        lineHeight="19px"
        color="#333333"
        p="5"
      >
        Popular Authors
      </Heading>
      <Slider {...settings}>
        {authors.map((author) => (
          <li key={author.id}>
            <AuthorItem author={author} />
          </li>
        ))}
      </Slider>
    </>
  )
}

export default PopularAuthors
