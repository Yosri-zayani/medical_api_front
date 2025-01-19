// components/ui/button.tsx
import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default', // Set 'default' as the default variant
  size = 'md',       // Set 'md' as the default size
  ...props
}) => {
  // Determine base styles based on variant
  let baseStyles = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  switch (variant) {
    case 'default':
      baseStyles += ' bg-blue-500 hover:bg-blue-600 text-white border border-transparent';
      break;
    case 'destructive':
      baseStyles += ' bg-red-500 hover:bg-red-600 text-white border border-transparent';
      break;
    case 'outline':
      baseStyles += ' border border-gray-300 text-gray-700 hover:bg-gray-100';
      break;
    case 'ghost':
      baseStyles += ' text-gray-700 hover:bg-gray-100 border border-transparent';
      break;
    case 'link':
      baseStyles += ' text-blue-500 underline hover:text-blue-700 border border-transparent';
      break;
  }

  // Determine size-based styles
  switch (size) {
    case 'sm':
      baseStyles += ' text-sm px-3 py-1';
      break;
    case 'md':
      baseStyles += ' text-base px-4 py-2';
      break;
    case 'lg':
      baseStyles += ' text-lg px-5 py-3';
      break;
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};