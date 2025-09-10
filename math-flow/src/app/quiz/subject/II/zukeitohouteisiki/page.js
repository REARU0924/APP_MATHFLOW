'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const titles = [
  "平行四辺形",
  "２直線の交点を通る直線",
  "直線と面積の等分",
  "共有と共線",
  "折れ線の長さの最小",
  "曲線状の点と直線の距離",
  "円の２接点を通る直線",
  "2円の共通接線",
  "角の二等分線、線対象な直線の方程式",
  "軌跡(１)",
  "軌跡(２)",
  "軌跡(３)",
  "軌跡(４)",
  "軌跡(５)",
  "ab平面上に図示",
  "線形計画法(１)",
  "線形計画法(２)",
  "直線の通過領域(１)",
  "直線の通過領域(２)",
  "点の動く領域(１)",
  "点の動く領域(２)"
];

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/quiz/question?id=${id}&unit=zukeitohouteisiki&math=II`);
  }
  const handleBack = () => {
    router.push(`/quiz/subject/II`);
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="yellow.300" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
        <Heading as="h1" size="2xl" mb={12} fontFamily="mono" color="black">
          図形と方程式
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