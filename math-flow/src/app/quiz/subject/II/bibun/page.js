'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "関数方程式",
  "法線の方程式",
  "２曲線に接する直線",
  "曲線が接する条件",
  "三次関数の極値の条件",
  "三次関数のグラフの対称性",
  "極大値と極小値の条件(１)",
  "極大値と極小値の条件(２)",
  "四次関数が極大値をもたない",
  "区間における最大最小",
  "三次関数の決定",
  "係数に文字を含む三次関数の最大最小",
  "三角関数の最大最小",
  "指数対数関数の最大最小",
  "三次方程式の解の個数",
  "四次関数のグラフと二点で接する直線",
  "三本の接線が引けるための条件",
  "不等式が成り立つ条件"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=bibun&math=II`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/II`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          微分法
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