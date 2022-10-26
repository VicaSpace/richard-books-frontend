import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HeadingSection: React.FC<{}> = () => {
  return (
    <>
      <Heading>Hi Richard</Heading>
      <Text>What are you reading today?</Text>
      <Image src="https://pbs.twimg.com/media/D8E8U37X4AA9OvW.jpg" alt="Richard" w={50} h={50} borderRadius={100} />
    </>
  )
}

export default HeadingSection
