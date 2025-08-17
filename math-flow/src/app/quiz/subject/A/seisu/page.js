'use client'

import { useRouter } from "next/navigation";
import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

export default function QuizPage() {
  const router = useRouter();

  const handleClick = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/question?id=${id}&unit=seisu&math=A`);
  }
  const handleBack = (id) => {
    // IDをURLに渡す
    router.push(`/quiz/subject/A`);
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
        整数
      </Heading>
      <VStack spacing={4}>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan" onClick={() => handleClick(1)}>
        １ ルートの値が自然数になる
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(2)}>
        ２ 素数
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(3)}>
       ３ 最大公約数と最小公倍数
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(4)}>
       ４ 互いに素に関する証明
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(5)}>
       ５ 整数であることの証明問題
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(6)}>
       ６ 余りの利用
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(7)}>
       ７ 合同式(１)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(8)}>
       ８ 合同式(２)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(9)}>
       ９ 互除法
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(10)}>
       １０ 一次不定方程式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(11)}>
       １１ 整数多項式
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(12)}>
       １２ 絞り込み(１)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(13)}>
       １３ 絞り込み(２)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(14)}>
       １４ （）×（）＝（整数）(１)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(15)}>
       １５ （）×（）＝（整数）(２)
      </Button>
      <Button width="full" fontWeight="bold" boxShadow="md"  colorScheme="cyan"  onClick={() => handleClick(16)}>
       １６ 方程式の整数解（判別式の利用）
      </Button>

      <Button width="full" fontWeight="bold" boxShadow="md"  variant="outline" onClick={() => handleBack()} mt={6}>
          戻る
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
}