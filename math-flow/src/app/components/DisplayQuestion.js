'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Image, VStack, Text, HStack } from '@chakra-ui/react'
import questionSets from '../data/question'

const shuffleArray = (array) => {
  const shuffledArray = [...array]
  if (shuffledArray.length <= 1) return shuffledArray;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export default function DisplayQuestion({ id, unit, math }) {
  const [questionData, setQuestionData] = useState(null)
  const [blanks, setBlanks] = useState([])  
  const [selectedOption, setSelectedOption] = useState(null)
  const [result, setResult] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [shuffledOptions,setshuffledOptions] = useState(null)
  const router = useRouter()
  useEffect(() => {
    if (!id) {
      console.error('IDが指定されていません');
      return;
    }
  
    const fetchQuestionData = async () => {
      // const res = await fetch(`/api/questions?id=${id}`);
      const data = questionSets[unit]
      if (!data) {
        console.error(`"${unit}" に対応する問題セットが見つかりません`);
        return;
      }
      const question = data.find(q => q.id === parseInt(id));
      setTotalQuestions(data.length)

      
      if (question) {
        setQuestionData(question);
        setBlanks(new Array(question.content.filter(item => item.type === 'blank').length).fill(null));
      } else {
        console.error('該当する問題が見つかりません');
      }
    }
  
    fetchQuestionData();    
  }, [id]);

  useEffect(() => {
    if (questionData && questionData.options) {
      setshuffledOptions(shuffleArray(questionData.options));
    }
  }, [questionData]);
  
  if (!questionData) return <Box minHeight="100vh"bg={'yellow.300'}><Text>Loading...</Text></Box> // データがない場合、ローディング表示

  const handleOptionClick = (src) => {
    setSelectedOption(src);
  }

  const handleBlankClick = (blankId) => {
    if (selectedOption) {
      const updatedBlanks = [...blanks];
      updatedBlanks[blankId - 1] = selectedOption;
      setBlanks(updatedBlanks);
      setSelectedOption(null);
    }
  }

  const handleAnswer = () => {
    const isCorrect = blanks.every((blank, index) => blank === questionData.answers[index]);
    if (isCorrect) {
      setResult('正解！');
    } else {
      setResult('不正解...');
    }
    setShowExplanation(true);

    
  }


  const handleClick = (id) => {
    // IDをURLに渡す
    setShowExplanation(false)
    setResult(false)
    router.push(`/quiz/question?id=${id+1}&unit=${unit}&math=${math}`);
  }
  const handleback = () => {
    // IDをURLに渡す
    router.push(`/quiz/subject/${math}/${unit}`);
  }

  

  return (
    
    <Box minH="100vh" bg="yellow.300" p={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        
        <Text fontSize="xl" fontWeight="bold" mb={6}>
          以下の問題の解答内の空欄に選択肢を正しい順番で入れよ
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={6}>
          （選択肢をタップした後に、空欄をタップすると、空欄に選択肢が入ります）
        </Text>
      {questionData.content.map((item, index) => {
        if (item.type === "question") {
          return <Image key={index} src={item.image} alt={`問題${index + 1}`}  width="95%" mb={6} />;
        }
        if (item.type === "blank") {
          return (
            <Box
              key={index}
              onClick={() => handleBlankClick(item.blankId)}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="2px dashed red"
              mb={6}
              p={4}
              minHeight="80px"
              minWidth="120px"
              width="95%"
            >
              {blanks[item.blankId - 1] && (
                <Image src={blanks[item.blankId - 1]} alt={`空欄${item.blankId}`} maxW="100%" maxH="auto" />
              )}
            </Box>
          );
        }
        return null;
      })}

      <Text fontSize="xl" fontWeight="bold" mb={6}>選択肢</Text>
      <VStack spacing={4} align="center" mb={6}>
        {shuffledOptions && shuffledOptions.map((option, index) => (
          <Image
            key={index}
            src={option}
            alt={`選択肢${index + 1}`}
            width="95%"
            height="auto"
            cursor="pointer"
            border="2px solid transparent"
            _hover={{ border: '2px solid #666' }}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </VStack>

      <Button colorScheme="cyan" onClick={handleAnswer} mt={6}>回答</Button>

      {result && <Text fontSize="xl" fontWeight="bold" mt={6}>{result}</Text>}

      {showExplanation && (
        <Image src={questionData.explanation} alt="解説画像" width="99%" mt={6} />
      )}
      {questionData.id === totalQuestions ? 
      <></> : <Button variant="outline" colorScheme="cyan" onClick={() => handleClick(questionData.id)} mt={6}>次へ</Button>}
      
      <Button variant="outline" colorScheme="cyan" onClick={() => handleback()} mt={6}>問題一覧に戻る</Button>
    </Box>
  );
}
