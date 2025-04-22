// Calculator operations
export enum Operation {
  Add = '+',
  Subtract = '-',
  Multiply = '×',
  Divide = '÷',
  None = '',
}

// Calculate result based on two numbers and an operation
export function calculate(a: number, b: number, operation: Operation): number {
  switch (operation) {
    case Operation.Add:
      return a + b;
    case Operation.Subtract:
      return a - b;
    case Operation.Multiply:
      return a * b;
    case Operation.Divide:
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    default:
      return b;
  }
}

// Format number for display
export function formatNumber(num: number | string): string {
  const numStr = num.toString();
  
  // Handle case where input is just a decimal point
  if (numStr === '.') return '0.';
  
  // If the input is a string and ends with a decimal point, preserve it
  if (typeof num === 'string' && numStr.endsWith('.')) {
    return numStr;
  }
  
  // If it's already a formatted string with a decimal point
  if (typeof num === 'string' && numStr.includes('.')) {
    return numStr;
  }
  
  return parseFloat(numStr).toLocaleString('en-US', {
    maximumFractionDigits: 10,
    useGrouping: true,
  });
}

// Clean the display format for calculation
export function cleanNumberString(str: string): number {
  // Remove commas and convert to number
  return parseFloat(str.replace(/,/g, ''));
}