// components/ui/scroll-area.tsx
import * as React from 'react';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: number | string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  maxHeight,
  ...props
}) => {
  const style: React.CSSProperties = {
    maxHeight: maxHeight,
    overflowY: 'auto', // Enable vertical scrolling
  };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export { ScrollArea };