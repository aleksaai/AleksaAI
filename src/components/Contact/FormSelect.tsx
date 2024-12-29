import React from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export function FormSelect({ label, options, ...props }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <select
        {...props}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          transition-all duration-300
          appearance-none bg-[length:20px] bg-[position:right_1rem_center] bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%236B7280' stroke-width='1.67' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
        }}
      >
        <option value="" disabled>Select a reason</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}