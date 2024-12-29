import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        relative group px-8 py-3 rounded-xl font-medium transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' 
          : 'bg-white/[0.03] text-white border border-white/[0.05] hover:bg-white/[0.08]'}
      `}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
      )}
    </button>
  );
}