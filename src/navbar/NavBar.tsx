import { Button, Container, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()

  return (
    <Container position="fixed" bottom="0" left="0" right="0">
      <Button onClick={() => navigate('/')}>Home</Button>
      <IconButton colorScheme="blue" aria-label="Search" icon={<SearchIcon />} onClick={() => navigate('/search')} />
      <Button onClick={() => navigate('/books')} >Books</Button>
    </Container>
  )
}

export default NavBar
