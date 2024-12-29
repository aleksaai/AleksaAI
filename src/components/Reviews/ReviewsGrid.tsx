import React from 'react';
import { ReviewCard } from './ReviewCard';

const reviews = [
  {
    name: "Jonas Plewka",
    role: "CEO",
    company: "Pengoro UG",
    image: "https://i.postimg.cc/mZMbRrYD/152.png",
    companyLogo: "https://i.postimg.cc/0y43bYxq/5.png",
    review: "The AI chatbot has transformed our customer service. Response times dropped by 80% and customer satisfaction is at an all-time high."
  },
  {
    name: "Patrick Benz",
    role: "Founder",
    company: "u-own GmbH",
    image: "https://i.postimg.cc/Fs4hKQpx/151.png",
    companyLogo: "https://i.postimg.cc/PrJnJrZY/8.png",
    review: "The automation solutions have streamlined our document processing. What used to take hours now happens in minutes."
  },
  {
    name: "Julian Hall",
    role: "CEO",
    company: "Ultra Ventures",
    image: "https://i.postimg.cc/Z5JYwhyq/154.png",
    companyLogo: "https://i.postimg.cc/Rh9C2rbG/7.png",
    review: "Their voice AI system has revolutionized our appointment scheduling. It's like having a full-time receptionist that never sleeps."
  },
  {
    name: "Renee Baumann",
    role: "Founder",
    company: "Beautylounge AG",
    image: "https://i.postimg.cc/26LC1kg0/153.png",
    companyLogo: "https://i.postimg.cc/sxcWN4KQ/6.png",
    review: "The AI-powered inventory management system has reduced our stockouts by 95%. It's been a game-changer for our business."
  }
];

export function ReviewsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}