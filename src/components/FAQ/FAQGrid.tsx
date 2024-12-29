import React from 'react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We offer a comprehensive range of AI solutions including AI chatbots, voice agents, workflow automation, and custom AI consulting services. Our solutions are tailored to meet specific business needs and can be integrated with existing systems."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary depending on the complexity of the solution and your specific requirements. Typically, basic chatbots can be deployed within 2-4 weeks, while more complex AI systems might take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive post-implementation support including 24/7 monitoring, regular maintenance, updates, and continuous optimization of your AI solutions. Our team is always available to address any concerns and ensure optimal performance."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement industry-leading security measures and follow strict data protection protocols. All data is encrypted, and we comply with GDPR and other relevant data protection regulations. We can also implement additional security measures based on your specific requirements."
  },
  {
    question: "Can your AI solutions integrate with existing systems?",
    answer: "Yes, our AI solutions are designed to integrate seamlessly with most existing business systems and software. We support integration with popular CRM systems, communication platforms, and custom software solutions."
  },
  {
    question: "What makes your AI solutions different from others?",
    answer: "Our solutions stand out through their advanced customization capabilities, seamless integration options, and focus on delivering measurable business results. We combine cutting-edge AI technology with deep industry expertise to create solutions that truly transform business operations."
  }
];

export function FAQGrid() {
  return (
    <div className="grid gap-6">
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}