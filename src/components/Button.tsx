import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  variant?: 'number' | 'operation' | 'equal' | 'clear';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  value, 
  onClick, 
  variant = 'number',
  className = '',
}) => {
  const baseClasses = "flex items-center justify-center font-medium text-xl rounded-lg transition-all duration-150 shadow-sm active:shadow-inner active:scale-95";
  
  const variantClasses = {
    number: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    operation: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    equal: "bg-orange-500 text-white hover:bg-orange-600",
    clear: "bg-red-100 text-red-600 hover:bg-red-200",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={() => onClick(value)}
      aria-label={value}
    >
      {value}
    </button>
  );
};

export default Button;