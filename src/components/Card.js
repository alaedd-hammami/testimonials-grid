import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import quotationImg from '../assets/images/quotation.svg'

const Card = ({ avatar, name, title, text, quotation = false, ...rest }) => {
  return (
    <GridItem position="relative" rounded={8} boxShadow="lg" {...rest}>
      {quotation && (
        <Image
          position="absolute"
          top={0}
          right={{ base: 5, sm: 20 }}
          src={quotationImg}
          zIndex={1}
          alt="quotation mark"
        />
      )}
      <VStack px={7} py={3} spacing={4}>
        <Flex alignSelf="flex-start" zIndex={2}>
          <Avatar src={avatar} />
          <Box ml={4} fontSize="sm">
            <Text fontWeight="bold">{name}</Text>
            <Text opacity={0.5} fontWeight="semibold">
              Verified Graduate
            </Text>
          </Box>
        </Flex>
        <Heading alignSelf="flex-start" size="md" zIndex={2}>
          {title}
        </Heading>
        <Text
          alignSelf="flex-start"
          opacity={0.7}
          fontSize="sm"
          // fontWeight="semibold"
          zIndex={2}
        >
          {text}
        </Text>
      </VStack>
    </GridItem>
  )
}

export default Card
