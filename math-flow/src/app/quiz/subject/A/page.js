'use client'

import { useRouter } from "next/navigation"
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter()

  const handleClick = (p) => {
    router.push(`/quiz/subject/A/${p}`)
  }

  const handleBack= (id) => {
    // IDをURLに渡す
    router.push(`/quiz/subject-select`);
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
      <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
        数Iの問題
      </Heading>
      <VStack spacing={4}>
        {/* <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("kazutosiki")}>
          数と式
        </Button> */}
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("baainokazu")}>
          場合の数
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" >
          確率＊準備中
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  )
}
