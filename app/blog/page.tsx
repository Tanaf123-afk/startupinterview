import React from 'react';

const articles = [
  {
    title: "Top 10 Engineering Interview Questions (and How to Answer Them)",
    intro: "Discover the most common engineering interview questions and expert strategies for answering them with confidence."
  },
  {
    title: "How to Beat Interview Anxiety with Real Practice",
    intro: "Learn practical tips and exercises to overcome nerves and perform your best in any interview situation."
  },
  {
    title: "The Secret to Getting More Interview Calls from Gradcracker",
    intro: "Unlock the strategies that help you stand out and get noticed by top employers on Gradcracker."
  }
];

export default function BlogPage() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">InterviewPro Blog</h1>
      <p className="text-lg text-gray-700 mb-8">Insights, tips, and resources to help you succeed in your job search and interviews.</p>
      <div className="space-y-8">
        {articles.map((article, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 