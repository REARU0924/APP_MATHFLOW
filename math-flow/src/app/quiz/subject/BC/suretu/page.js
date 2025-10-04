'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "二つの数列の共通項",
  "等比数列の和",
  "数列と対数",
  "階差数列",
  "部分分数分解",
  "nの偶奇で場合分け",
  "群数列",
  "群数列(応用)",
  "自然数の表と群数列",
  "格子点",
  "階差数列を用いた漸化式の解法",
  "n乗の項を含む漸化式",
  "両辺の逆数を取る漸化式の解法",
  "漸化式と対数",
  "階差数列の形に変形する",
  "漸化式を繰り返し用いる",
  "隣接３項間の漸化式",
  "連立漸化式(１)",
  "連立漸化式(２)",
  "漸化式(誘導あり)",
  "数列の和と漸化式",
  "図形と漸化式",
  "確率漸化式(１)",
  "確率漸化式(２)",
  "数学的帰納法(１)",
  "数学的帰納法(２)"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=suretu&math=BC`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/BC`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          数列
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