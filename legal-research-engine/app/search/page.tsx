import { Suspense } from 'react';
import AskResultClient from './AskResultClient';

export default function AskResultPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#282828] text-white py-12 px-6 flex flex-col items-center justify-center">
      <Suspense fallback={<p className="text-gray-400">Loading your legal results...</p>}>
        <AskResultClient />
      </Suspense>
    </main>
  );
}
