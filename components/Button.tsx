import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-3 font-display tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-paper';

  const variantStyles = {
    primary: 'bg-primary text-secondary hover:bg-ink hover:text-paper',
    secondary: 'bg-transparent border-2 border-ink text-ink hover:bg-primary hover:text-secondary',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      data-cursor-hover="true"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;