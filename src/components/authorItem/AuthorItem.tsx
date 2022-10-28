import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AuthorItem: React.FC<{ author: any }> = ({ author }) => {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src={author.img} alt={author.name} borderRadius="100%" w="80px" h="80px" mb="2"></Image>
      <Text
        fontFamily="Average"
        fontWeight="400"
        fontSize="14px"
        lineHeight="17px"
        color="#333333"
      >
        {author.name}
      </Text>
    </Flex>
  )
}

export default AuthorItem
