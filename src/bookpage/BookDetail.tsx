import { Container } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router'

const BookDetail: React.FC<{}> = () => {
  const { id } = useParams()

  return (
    <Container>
      {id}
    </Container>
  )
}

export default BookDetail
