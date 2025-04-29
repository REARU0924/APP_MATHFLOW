import { Suspense } from 'react';
import QuestionClientWrapper from './QuestionClientWrapper';

export default function QuestionPage() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <QuestionClientWrapper />
    </Suspense>
  );
}
