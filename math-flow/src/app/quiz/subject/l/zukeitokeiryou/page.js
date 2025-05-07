
'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter();


  const handleClick = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/question?id=${id}&unit=zukeitokeiryou&math=l`);
  }
  const handleBack = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/subject/l`);
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
        図形と計量
      </Heading>
      <VStack spacing={4}>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick(1)}>
        三角比を含む方程式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(2)}>
        三角比の条件（１）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(3)}>
        三角比の条件（２）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
}


