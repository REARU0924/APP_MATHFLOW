'use client';

import { useSearchParams } from 'next/navigation';
import DisplayQuestion from '../../components/DisplayQuestion';
import { ChakraProvider } from '@chakra-ui/react';

export default function QuestionClientWrapper() {
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
