'use client'

import { useRouter } from 'next/navigation'
import { subjects } from '@/app/subjects'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { color } from 'framer-motion'

export default function SubjectSelect() {
  const router = useRouter()

  const handleClick = (subject) => {
    router.push(`/quiz/subject/${subject}`)
  }

  return (
    <ChakraProvider>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="yellow.300"
      padding={4}
    >
      <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
        教科を選んでね
      </Heading>
      <VStack spacing={4}>
        {subjects.map((subject) => (
          <Button
            key={subject.label}
            colorScheme="cyan"
            size="lg"
            fontWeight="bold"
            onClick={() => handleClick(subject.label)}
            width="full"
            boxShadow="md"
          >
            {subject.value}
          </Button>
        ))}
      </VStack>
    </Box>
    </ChakraProvider>
  )
}
