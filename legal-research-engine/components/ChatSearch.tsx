'use client';
import { useState } from 'react';

export default function ChatSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: query }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setResult(data.reply);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ask a Legal Question</h2>
      <textarea
        className="w-full p-3 rounded text-black"
        rows={4}
        placeholder="Type your legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Ask AI'}
      </button>

      {result && (
        <div className="mt-6 bg-gray-700 p-4 rounded">
          <h3 className="font-semibold">Result:</h3>
          <p>{result}</p>
          
        </div>
      )}
    </div>
  );
}
