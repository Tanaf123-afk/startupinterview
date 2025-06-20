import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
      <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 dark:text-gray-300">
        <li>You only collect user emails and performance scores to provide feedback.</li>
        <li>Videos are stored securely and only visible to the user.</li>
        <li>You don't sell or share data with third parties.</li>
      </ul>
    </div>
  );
} 