import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const BookItem: React.FC<{ book: any }> = ({ book }) => {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src={book.img} alt={book.name} h="150px" mb="2"></Image>
      <Text
        fontFamily="Average"
        fontWeight="400"
        fontSize="14px"
        lineHeight="17px"
        color="#333333"
      >
        {book.name}
      </Text>
      <Text
        fontFamily="Average"
        fontWeight="400"
        fontSize="12px"
        lineHeight="17px"
        color="#828282"
      >
        {book.Author.name}
      </Text>
      <Text
        fontFamily="Average"
        fontWeight="400"
        fontSize="16px"
        lineHeight="19px"
        color="#333333"
      >
        ${book.price}
      </Text>
    </Flex>
  )
}

export default BookItem
