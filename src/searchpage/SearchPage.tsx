import { Container } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../utils/sharedComponents/navBar/NavBar'

const SearchPage: React.FC<{}> = () => {
  return (
    <Container>
      <p>SearchPage</p>
      <NavBar />
    </Container>
  )
}

export default SearchPage
