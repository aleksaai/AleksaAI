import React, { useState } from 'react';
import { Workflow, Brain, MessageSquare, Mic, Video, Image, Layout, FileText } from 'lucide-react';
import { ToolCard } from './ToolCard';
import { ToolsFilter } from './ToolsFilter';

const tools = [
  {
    title: "Zapier",
    description: "Connect your apps and automate workflows with easy-to-use automation tools for businesses of all sizes.",
    icon: Workflow,
    categories: ["Automations"],
    image: "https://i.postimg.cc/RhQz90by/2.png"
  },
  {
    title: "Gemini",
    description: "Google's most capable AI model for text, code, images, and creative tasks with advanced reasoning abilities.",
    icon: Brain,
    categories: ["Productivity"],
    image: "https://i.postimg.cc/Gmt6gzrZ/12.png"
  },
  {
    title: "Swat.io",
    description: "Professional social media management platform for efficient content planning, publishing, and analytics.",
    icon: Layout,
    categories: ["Automations"],
    image: "https://i.postimg.cc/13d2k634/14.png"
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, docs, and project management with powerful AI integration.",
    icon: FileText,
    categories: ["Productivity"],
    image: "https://i.postimg.cc/FR5qR4c4/15.png"
  },
  {
    title: "awork",
    description: "Smart project management tool with AI capabilities for seamless client collaboration and task automation.",
    icon: Brain,
    categories: ["Productivity"],
    image: "https://i.postimg.cc/FHwCW4TL/16.png"
  },
  {
    title: "Auto IG DM",
    description: "Instagram DM automation tool for targeted audience engagement and personalized messaging.",
    icon: Workflow,
    categories: ["Automations"],
    image: "https://i.postimg.cc/cHBDL80R/17.png"
  },
  {
    title: "Make.com",
    description: "Visual automation platform that lets you design, build, and automate anything from simple tasks to complex workflows.",
    icon: Workflow,
    categories: ["Automations"],
    image: "https://i.postimg.cc/9QBz1mmx/3.png"
  },
  {
    title: "Relevance AI",
    description: "Advanced AI platform for building and deploying production-ready AI applications with powerful vector operations.",
    icon: Brain,
    categories: ["AI Chatbots", "Automations"],
    image: "https://i.postimg.cc/J0WW9XKj/4.png"
  },
  {
    title: "Voiceflow",
    description: "Platform for building and deploying AI chatbots and conversational experiences without coding.",
    icon: MessageSquare,
    categories: ["AI Chatbots"],
    image: "https://i.postimg.cc/KvfyHRTg/6.png"
  },
  {
    title: "Vapi",
    description: "Advanced voice AI solution for creating natural and engaging voice interactions.",
    icon: Mic,
    categories: ["Voice Agents"],
    image: "https://i.postimg.cc/Dz9VXG9R/7.png"
  },
  {
    title: "Perplexity",
    description: "AI-powered search and discovery platform that provides accurate, real-time information and insights.",
    icon: Brain,
    categories: ["Productivity"],
    image: "https://i.postimg.cc/mk40ds2w/8.png"
  },
  {
    title: "Sora",
    description: "OpenAI's text-to-video model capable of creating realistic and creative videos from text descriptions.",
    icon: Video,
    categories: ["Video Generator"],
    image: "https://i.postimg.cc/d39gpxhK/9.png"
  },
  {
    title: "Retell AI",
    description: "Voice AI platform for creating natural-sounding voice interactions and automated conversations.",
    icon: Mic,
    categories: ["Voice Agents"],
    image: "https://i.postimg.cc/BZcWjXMw/10.png"
  },
  {
    title: "Midjourney",
    description: "AI-powered tool that creates stunning artwork and images from text descriptions.",
    icon: Image,
    categories: ["Image Generator"],
    image: "https://i.postimg.cc/rFQv9761/11.png"
  }
];

const categories = [
  "Automations",
  "Productivity",
  "AI Chatbots",
  "Voice Agents",
  "Video Generator",
  "Image Generator"
];

export function ToolsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = tools.filter(tool => 
    selectedCategory === 'all' || tool.categories.includes(selectedCategory)
  );

  return (
    <div className="mt-16">
      <div className="relative">
        <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl rounded-2xl" />
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/[0.05] p-8 rounded-2xl">
          <ToolsFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}