import React from 'react';
import { TeamHeader } from './TeamHeader';
import { TeamGrid } from './TeamGrid';

export function Team() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -right-64 top-0 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -left-64 bottom-0 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamHeader />
        <TeamGrid />
      </div>
    </section>
  );
}