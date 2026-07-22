import { cn } from '@/utils/helpers';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'primary-btn',
  secondary: 'secondary-btn',
  danger: 'danger-btn',
};

export default function Button({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(variantClasses[variant], className)}
      type={type}
      {...props}
    />
  );
}
