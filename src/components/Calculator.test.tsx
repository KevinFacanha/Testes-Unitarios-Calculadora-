import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('should render calculator with initial display of 0', () => {
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('0');
  });

  it('should update display when clicking digits', () => {
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('123');
  });

  it('should perform addition correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('8');
  });

  it('should perform subtraction correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('5');
  });

  it('should perform multiplication correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '6' }));
    fireEvent.click(screen.getByRole('button', { name: '×' }));
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('42');
  });

  it('should perform division correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '÷' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('4');
  });

  it('should handle decimal points correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('5.5');
  });

  it('should clear the display when pressing C', () => {
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('0');
  });

  it('should show error for division by zero', () => {
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '÷' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const error = screen.getByTestId('error-message');
    const display = screen.getByTestId('calculator-display');
    expect(error.textContent).toBe('Cannot divide by zero');
    expect(display.textContent).toBe('0');
  });

  it('should perform chained operations correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '×' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('20');
  });
});