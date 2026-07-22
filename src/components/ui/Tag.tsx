import { cn } from '@/utils/helpers';
import type { HTMLAttributes, ReactNode } from 'react';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-sm font-medium text-dark',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
