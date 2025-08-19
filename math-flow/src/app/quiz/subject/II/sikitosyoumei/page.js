'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/question?id=${id}&unit=sikitosyoumei&math=II`);
  }
  const handleBack = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/subject/II`);
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
        式と証明
      </Heading>
      <VStack spacing={4}>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick(1)}>
        １ 割り算と恒等式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(2)}>
        ２ 条件のある恒等式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(3)}>
       ３ 比例式とその値
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(4)}>
       ４ 絶対不等式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(5)}>
       ５ 相加相乗平均の大小関係
      </Button>

      <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
}