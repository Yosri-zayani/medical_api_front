import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="text" // You can set a default type or make it dynamic through props
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} // Add your basic styles here or import a CSS module
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = Input.name; // For better debugging

export { Input };


