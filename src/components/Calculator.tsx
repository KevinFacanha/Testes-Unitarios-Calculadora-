import React, { useState } from 'react';
import Button from './Button';
import { Operation, calculate, formatNumber, cleanNumberString } from '../utils/calculator';

const Calculator: React.FC = () => {
  // State
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(Operation.None);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle digit input
  const handleDigit = (digit: string) => {
    setError(null);
    
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  // Handle decimal point
  const handleDecimal = () => {
    setError(null);
    
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Handle operations
  const handleOperation = (op: Operation) => {
    setError(null);
    
    const inputValue = cleanNumberString(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation !== Operation.None && !waitingForOperand) {
      try {
        const result = calculate(previousValue, inputValue, operation);
        setPreviousValue(result);
        setDisplay(formatNumber(result));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setDisplay('0');
          setPreviousValue(null);
          setOperation(Operation.None);
          return;
        }
      }
    }
    
    setOperation(op);
    setWaitingForOperand(true);
  };

  // Handle equals
  const handleEquals = () => {
    setError(null);
    
    if (previousValue === null || operation === Operation.None || waitingForOperand) {
      return;
    }
    
    const inputValue = cleanNumberString(display);
    
    try {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(formatNumber(result));
      setPreviousValue(null);
      setOperation(Operation.None);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setDisplay('0');
        setPreviousValue(null);
        setOperation(Operation.None);
      }
    }
  };

  // Handle clear
  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(Operation.None);
    setWaitingForOperand(false);
    setError(null);
  };

  // Button layout configuration
  const buttons = [
    { value: 'C', variant: 'clear' as const },
    { value: '÷', variant: 'operation' as const, op: Operation.Divide },
    { value: '×', variant: 'operation' as const, op: Operation.Multiply },
    { value: '-', variant: 'operation' as const, op: Operation.Subtract },
    { value: '7', variant: 'number' as const },
    { value: '8', variant: 'number' as const },
    { value: '9', variant: 'number' as const },
    { value: '+', variant: 'operation' as const, op: Operation.Add, className: 'row-span-2' },
    { value: '4', variant: 'number' as const },
    { value: '5', variant: 'number' as const },
    { value: '6', variant: 'number' as const },
    { value: '1', variant: 'number' as const },
    { value: '2', variant: 'number' as const },
    { value: '3', variant: 'number' as const },
    { value: '=', variant: 'equal' as const, className: 'row-span-2' },
    { value: '0', variant: 'number' as const, className: 'col-span-2' },
    { value: '.', variant: 'number' as const },
  ];

  // Button click handler
  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      handleClear();
    } else if (value === '=') {
      handleEquals();
    } else if (['+', '-', '×', '÷'].includes(value)) {
      handleOperation(value as Operation);
    } else if (value === '.') {
      handleDecimal();
    } else {
      handleDigit(value);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Display */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-right relative">
        {error && (
          <div className="absolute top-2 left-0 w-full text-center text-red-300 text-sm" data-testid="error-message">
            {error}
          </div>
        )}
        <div className="text-blue-200 text-sm h-4 min-h-4 mb-1">
          {previousValue !== null ? `${formatNumber(previousValue)} ${operation}` : ''}
        </div>
        <div className="text-white text-4xl font-bold truncate" data-testid="calculator-display" role="textbox" aria-label="Calculator Display">
          {display}
        </div>
      </div>
      
      {/* Buttons grid */}
      <div className="grid grid-cols-4 gap-0.5 p-1 bg-gray-100">
        {buttons.map((button, index) => (
          <Button
            key={index}
            value={button.value}
            variant={button.variant}
            onClick={handleButtonClick}
            className={`h-16 m-0.5 ${button.className || ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;