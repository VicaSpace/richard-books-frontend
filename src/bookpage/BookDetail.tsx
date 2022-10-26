import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import DATA from '../homepage/data'
import bookmarkImg from './bookmark.png'
import bookmarkYellowImg from './bookmark-yellow.png'
import backImg from './back.png'

const BookDetail: React.FC<{}> = () => {
  const { id } = useParams()
  const book = DATA.books.filter(
    (book) => book.id === parseInt(id as string, 10)
  )[0]
  const navigate = useNavigate()

  const bookmarkedIdsStr: string = localStorage.getItem('bookmarked') ?? '[]'
  const bookmarkedIds: number[] = JSON.parse(bookmarkedIdsStr)
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarkedIds.includes(book.id)
  )

  const unbookmark = (): void => {
    const newBookmarkedIds = bookmarkedIds.filter((e) => e !== book.id)
    localStorage.setItem('bookmarked', JSON.stringify(newBookmarkedIds))
    setIsBookmarked(false)
  }

  const bookmark = (): void => {
    bookmarkedIds.push(book.id)
    localStorage.setItem('bookmarked', JSON.stringify(bookmarkedIds))
    setIsBookmarked(true)
  }

  return (
    <Container maxW="100%" p="10">
      <Flex justifyContent="space-between" mb="5">
        <Image src={backImg} alt="Back" onClick={() => navigate(-1)} h={30} />
        {!isBookmarked && (
          <Image src={bookmarkImg} alt="bookmark" onClick={bookmark} h={30} />
        )}
        {isBookmarked && (
          <Image
            src={bookmarkYellowImg}
            alt="bookmark-yellow"
            onClick={unbookmark}
            w={30}
          />
        )}
      </Flex>
      <Image src={book.img} alt={book.name} mb="5" />
      <Heading fontSize="30" textAlign="center">{book.name}</Heading>
      <Text color="gray" fontSize="20" textAlign="center" mb="5">{book.authorName}</Text>
      <Text textAlign="center" mb="5">{book.rating} / <Text color="gray" display="inline">5</Text></Text>
      <Text textAlign="justify" mb="5">{book.description}</Text>
      <Button color="white" background="black" w="100%" fontSize="25" p="8">Buy Now for ${book.price}</Button>
    </Container>
  )
}

export default BookDetail
