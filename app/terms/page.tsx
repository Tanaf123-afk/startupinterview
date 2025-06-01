import React from 'react';

export default function TermsPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
        <li>Users agree to use the platform only for personal interview practice.</li>
        <li>You are not liable for hiring outcomes.</li>
        <li>AI feedback is for educational purposes and not hiring advice.</li>
      </ul>
    </div>
  );
} 