import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Center, Container } from '@chakra-ui/react'

const Premium: React.FC<{}> = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Container mt="5" mb="5">
      <Slider {...settings}>
        <Center
          bg="yellow.100"
          h="60px"
          fontFamily="Average"
          fontSize="20px"
          fontWeight="400"
        >
          This is the content
        </Center>
        <Center
          bg="blue.100"
          h="60px"
          fontFamily="Average"
          fontSize="20px"
          fontWeight="400"
        >
          This is the content
        </Center>
        <Center
          bg="green.100"
          h="60px"
          fontFamily="Average"
          fontSize="20px"
          fontWeight="400"
        >
          This is the content
        </Center>
      </Slider>
    </Container>
  )
}

export default Premium
