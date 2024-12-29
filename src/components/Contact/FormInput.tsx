import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white
          placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          transition-all duration-300"
      />
    </div>
  );
}