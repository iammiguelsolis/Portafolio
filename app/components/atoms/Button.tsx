import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: "bg-sage-600 text-ivory-50 hover:bg-sage-700 hover:shadow-lg focus:ring-sage-500",
    secondary: "bg-coffee-500 text-ivory-50 hover:bg-coffee-600 hover:shadow-lg focus:ring-coffee-400",
    outline: "border-2 border-sage-600 text-sage-700 hover:bg-sage-50 focus:ring-sage-500",
    ghost: "text-forest-700 hover:bg-forest-100 hover:text-forest-900 bg-transparent shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const finalClassNames = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `;

  return (
    <button className={finalClassNames.trim()} {...props}>
      {children}
    </button>
  );
}