// app/quiz/question/page.js
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// クライアントコンポーネントを SSR 無効で遅延読み込み
const QuestionClient = dynamic(() => import('./QuestionClient'), {
  ssr: false,
});

export default function QuestionPage() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <QuestionClient />
    </Suspense>
  );
}
