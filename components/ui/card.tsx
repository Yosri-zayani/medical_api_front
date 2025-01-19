// components/ui/card.tsx
import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div className="rounded-lg bg-white shadow-md" {...props}>
      {children}
    </div>
  );
};


interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  return (
    <div className="p-4 border-b border-gray-200" {...props}>
      {children}
    </div>
  );
};



interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle: React.FC<CardTitleProps> = ({ children, ...props }) => {
  return <h3 className="text-lg font-semibold" {...props}>{children}</h3>;
};



interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return <div className="p-4" {...props}>{children}</div>;
};


interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}


export const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  return <div className="p-4 border-t border-gray-200" {...props}>{children}</div>;
};