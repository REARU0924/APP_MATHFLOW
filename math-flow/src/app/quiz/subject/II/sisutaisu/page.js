'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "指数関数の最大最小(１)",
  "対数方程式と領域",
  "指数関数の最大最小(２)",
  "桁数問題",
  "最高位問題",
  "指数方程式の解",
  "指数方程式の解の個数",
  "対数方程式の解の個数"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=sisutaisu&math=II`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/II`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          指数関数・対数関数
        </Heading>
        <VStack spacing={4}>
          {titles.map((title, idx) => (
            <Button key={idx} width="full" fontWeight="bold" boxShadow="md" colorScheme="cyan" onClick={() => handleClick(idx + 1)}>
              {idx + 1} {title}
            </Button>
          ))}
          <Button width="full" fontWeight="bold" boxShadow="md" variant="outline" onClick={handleBack} mt={6}>
            戻る
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}