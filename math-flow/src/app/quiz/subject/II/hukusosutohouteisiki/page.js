'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "二つの二次方程式の解",
  "係数に虚数を含む二次方程式",
  "解と係数の関係",
  "因数分解ができる条件",
  "解と係数の関係と式の値",
  "二次方程式の解の存在範囲",
  "二次方程式の整数解",
  "余剰の定理の利用",
  "高次式",
  "相反方程式",
  "有名二次方程式",
  "三次方程式が二重解を持つ",
  "三次の対象式",
  "三次の不等式"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=hukusosutohouteisiki&math=II`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/II`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          複素数と方程式
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