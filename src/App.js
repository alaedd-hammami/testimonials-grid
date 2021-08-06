import { Box, Center, Grid, Link } from '@chakra-ui/react'
import Card from './components/Card'
import {
  daniel,
  jeanette,
  jonathan,
  kira,
  patrick,
} from './assets/images/avatars/index'
import { data } from './helper'

function App() {
  return (
    <Center
      bg="gray.200"
      py={{ base: 20, lg: 0 }}
      px={{ base: 6, lg: 32 }}
      h={{ base: 'auto', lg: '100vh' }}
    >
      <Box>
        <Grid
          templateRows={{ base: 'repeat(5, auto)', lg: 'repeat(2, auto)' }}
          templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
          gap={6}
        >
          <Card
            colSpan={{ lg: 2 }}
            bg="violet"
            color="lightText"
            avatar={daniel}
            name={data.daniel.fullName}
            title={data.daniel.title}
            text={data.daniel.text}
            quotation
          />
          <Card
            bg="mediumGray"
            color="lightText"
            avatar={jonathan}
            name={data.jonathan.fullName}
            title={data.jonathan.title}
            text={data.jonathan.text}
          />
          <Card
            colStart={{ lg: 1 }}
            colEnd={{ lg: 2 }}
            bg="white"
            color="darkText"
            avatar={jeanette}
            name={data.jeanette.fullName}
            title={data.jeanette.title}
            text={data.jeanette.text}
          />
          <Card
            colSpan={{ lg: 2 }}
            bg="blueGray"
            color="lightText"
            avatar={patrick}
            name={data.patrick.fullName}
            title={data.patrick.title}
            text={data.patrick.text}
          />
          <Card
            rowStart={{ lg: 1 }}
            rowEnd={{ lg: 3 }}
            colStart={{ lg: 4 }}
            colEnd={{ lg: 5 }}
            bg="white"
            color="darkText"
            avatar={kira}
            name={data.kira.fullName}
            title={data.kira.title}
            text={data.kira.text}
          />
        </Grid>
        <Box fontSize="11px" textAlign="center" mt={2}>
          Challenge by{' '}
          <Link
            color="hsl(228, 45%, 44%)"
            href="https://www.frontendmentor.io?ref=challenge"
            isExternal
          >
            Frontend Mentor
          </Link>
          . Coded by{' '}
          <Link
            color="hsl(228, 45%, 44%)"
            href="https://github.com/alaedd-hammami"
            isExternal
          >
            Ala Eddine
          </Link>
          .
        </Box>
      </Box>
    </Center>
  )
}

export default App
