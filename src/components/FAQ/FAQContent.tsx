import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What types of AI solutions do you specialize in?",
    answer: "We specialize in developing custom AI chatbots, voice agents, and workflow automation solutions. Our expertise includes natural language processing, voice recognition, and process optimization tailored to your specific business needs."
  },
  {
    question: "How do you ensure AI integration success?",
    answer: "We follow a comprehensive approach: thorough initial assessment, custom solution design, rigorous testing, and seamless integration with your existing systems. Our team works closely with yours throughout the process to ensure smooth implementation."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various sectors including e-commerce, healthcare, finance, and customer service. Our AI solutions are adaptable and can be customized for any industry that needs to automate processes or enhance customer interactions."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on project scope. Simple chatbots can be ready in 2-4 weeks, while complex AI systems might take 2-3 months. We'll provide a detailed timeline after understanding your specific requirements."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including system monitoring, performance optimization, and technical assistance. Our team is available to help with any issues and ensure your AI solutions continue to perform at their best."
  }
];

export function FAQContent() {
  return (
    <div className="grid lg:grid-cols-[400px,1fr] gap-16">
      {/* Left Column - Title and Description */}
      <div>
        <div className="sticky top-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-6">FAQ</h2>
          
          <p className="text-gray-400 text-lg">
            We've gone ahead and answered the questions we're asked most often. Can't find what you're looking for? Feel free to reach out to us through the contact form above!
          </p>
        </div>
      </div>

      {/* Right Column - FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}