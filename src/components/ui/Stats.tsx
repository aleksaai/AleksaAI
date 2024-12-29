import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="px-8 py-4 bg-white/[0.03] rounded-2xl border border-white/[0.05]">
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="flex flex-wrap gap-4">
      <StatItem value="50+" label="Projects Delivered" />
      <StatItem value="98%" label="Client Satisfaction" />
      <StatItem value="24/7" label="Support Available" />
    </div>
  );
}