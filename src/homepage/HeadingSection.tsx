import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HeadingSection: React.FC<{}> = () => {
  return (
    <Flex justifyContent="space-between" p="5">
      <Flex flexDirection="column">
        <Heading fontFamily="Average" fontWeight="400" fontSize="28px" color="#333333">Hi Richard</Heading>
        <Text fontFamily='Average' fontWeight="400" fontSize="16px" lineHeight="19px">What are you reading today?</Text>
      </Flex>
      <Image src="https://pbs.twimg.com/media/D8E8U37X4AA9OvW.jpg" alt="Richard" w={50} h={50} borderRadius={100} />
    </Flex>
  )
}

export default HeadingSection
