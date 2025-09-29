'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "定積分で表された関数",
  "定積分の値の条件",
  "不等式の表す領域の面積",
  "二つの放物線と接する直線とその間の面積",
  "放物線と円が囲む面積",
  "面積の等分",
  "面積の最大最小(１)",
  "面積の最大最小(２)",
  "曲線x=f(y)と面積",
  "変数tを含む定積分の最大最小"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=sekibun&math=II`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/II`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          積分法
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