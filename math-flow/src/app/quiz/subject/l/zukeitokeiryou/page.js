
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
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(4)}>
        三角比を含む不等式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(5)}>
        三角比を含む関数の最大最小
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(6)}>
        三角形の成立条件
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(7)}>
        辺の長さが関数のとき
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(8)}>
        辺や角の等式の証明
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(9)}>
        円に内接する四角形
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
}


