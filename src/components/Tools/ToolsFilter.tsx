import React from 'react';

interface ToolsFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ToolsFilter({ categories, selectedCategory, onCategoryChange }: ToolsFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => onCategoryChange('all')}
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${selectedCategory === 'all'
            ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
            : 'bg-white/[0.03] border border-white/[0.05] text-gray-400 hover:text-white'}
        `}
      >
        All Tools
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedCategory === category
              ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
              : 'bg-white/[0.03] border border-white/[0.05] text-gray-400 hover:text-white'}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}