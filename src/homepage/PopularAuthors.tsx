import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export interface Author {
  id: number
  img: string
  name: string
}

const PopularAuthors: React.FC<{ authors: Author[] }> = ({ authors }) => {
  return (
    <>
      <Heading>Popular Authors</Heading>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Image src={author.img} alt={author.name} />
            <Text>{author.name}</Text>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PopularAuthors
