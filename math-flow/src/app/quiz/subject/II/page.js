'use client'

import { useRouter } from "next/navigation"
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter()

  const handleClick = (p) => {
    router.push(`/quiz/subject/II/${p}`)
  }

  const handleBack = (id) => {
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
        数IIの問題
      </Heading>
      <VStack spacing={4}>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("sikitosyoumei")}>
          式と証明
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("hukusosutohouteisiki")}>
          複素数と方程式
        </Button>
        {/* <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("sankakukannsu")}>
          三角関数
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("sisukannsu")}>
          指数関数・対数関数
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("bibun")}>
          微分法
        </Button>
        <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick("sekibun")}>
          積分法
        </Button> */}
        <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  )
}