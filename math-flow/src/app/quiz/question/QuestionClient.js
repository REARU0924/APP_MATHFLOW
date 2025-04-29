// app/quiz/question/QuestionClient.js
'use client';

import DisplayQuestion from '../../components/DisplayQuestion';
import { ChakraProvider } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

export default function QuestionClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const unit = searchParams.get('unit');
  const math = searchParams.get('math');

  return (
    <ChakraProvider>
      <DisplayQuestion id={id} unit={unit} math={math} />
    </ChakraProvider>
  );
}
