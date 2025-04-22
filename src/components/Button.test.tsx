import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render with the correct value', () => {
    const handleClick = vi.fn();
    render(<Button value="7" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: '7' });
    expect(button).toBeDefined();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button value="7" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: '7' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith('7');
  });

  it('should render with number variant by default', () => {
    const handleClick = vi.fn();
    render(<Button value="7" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: '7' });
    expect(button.className).toContain('bg-gray-100');
    expect(button.className).toContain('text-gray-800');
  });

  it('should render with operation variant when specified', () => {
    const handleClick = vi.fn();
    render(<Button value="+" onClick={handleClick} variant="operation" />);
    
    const button = screen.getByRole('button', { name: '+' });
    expect(button.className).toContain('bg-blue-100');
    expect(button.className).toContain('text-blue-600');
  });

  it('should render with equal variant when specified', () => {
    const handleClick = vi.fn();
    render(<Button value="=" onClick={handleClick} variant="equal" />);
    
    const button = screen.getByRole('button', { name: '=' });
    expect(button.className).toContain('bg-orange-500');
    expect(button.className).toContain('text-white');
  });

  it('should render with clear variant when specified', () => {
    const handleClick = vi.fn();
    render(<Button value="C" onClick={handleClick} variant="clear" />);
    
    const button = screen.getByRole('button', { name: 'C' });
    expect(button.className).toContain('bg-red-100');
    expect(button.className).toContain('text-red-600');
  });

  it('should include additional classes when provided', () => {
    const handleClick = vi.fn();
    render(<Button value="7" onClick={handleClick} className="test-class" />);
    
    const button = screen.getByRole('button', { name: '7' });
    expect(button.className).toContain('test-class');
  });
});