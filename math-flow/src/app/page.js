'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, Heading, VStack,Text } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/quiz/subject-select')
  }

  return (
    <ChakraProvider>
    <Box
      minH="100vh"
      bg="yellow.300"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={6}
    >
      <VStack spacing={12}>
        <Heading size="2xl" color="gray.900" fontWeight="bold">
          Math Flow
        </Heading>
        <Button
          colorScheme="cyan"
          size="lg"
          onClick={handleStart}
          px={8}
          py={6}
          fontSize="xl"
          fontWeight="semibold"
          boxShadow="lg"
          _hover={{ bg: 'cyan.500' }}
        >
          スタート
        </Button>
        <Text fontSize="x" fontWeight="bold" mb={6}>
          @KHS数学教室
        </Text>
      </VStack>
    </Box>
    </ChakraProvider>
  )
}
