import { Button, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button onClick={() => navigate('/')}>Home</Button>
      <IconButton colorScheme="blue" aria-label="Search" icon={<SearchIcon />} onClick={() => navigate('/search')} />
      <Button onClick={() => navigate('/books')} >Books</Button>
    </>
  )
}

export default NavBar
