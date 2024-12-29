import React from 'react';

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  companyLogo: string;
  review: string;
}

export function ReviewCard({ name, role, company, image, companyLogo, review }: ReviewCardProps) {
  return (
    <div className="group relative">
      {/* Hover effect only on desktop */}
      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 hidden lg:block lg:group-hover:opacity-100 blur transition duration-500 rounded-2xl" />
      <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl">
        {/* Company Logo */}
        <div className="h-12 mb-6">
          <img
            src={companyLogo}
            alt={company}
            className="h-full object-contain"
          />
        </div>

        {/* Review Text */}
        <p className="text-gray-400 mb-6">{review}</p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-white font-medium">{name}</h4>
            <p className="text-sm text-gray-400">{role} at {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}