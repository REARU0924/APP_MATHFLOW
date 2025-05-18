'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/question?id=${id}&unit=nizikansu&math=l`);
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
        二次関数
      </Heading>
      <VStack spacing={4}>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick(1)}>
        集合の要素の個数（１）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(2)}>
        集合の要素の個数（２）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(3)}>
       余事象の考え方
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(4)}>
       辞書順に並べる順列
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(5)}>
       立方体の塗り分け
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(6)}>
       重複順列
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(7)}>
       三角形の個数と組み合わせ
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(8)}>
       塗り分け問題
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(9)}>
       同じものを含む順列（１）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(10)}>
       同じものを含む順列（２）
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(11)}>
       最短経路
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(12)}>
       〇とⅠ（丸と仕切り）問題
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(13)}>
       整数解の個数
      </Button>
      
      <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
}
