import { describe, expect, it } from 'vitest';
import { calculate, Operation, formatNumber, cleanNumberString } from './calculator';

describe('Calculator', () => {
  describe('calculate function', () => {
    it('should add two numbers correctly', () => {
      expect(calculate(5, 3, Operation.Add)).toBe(8);
      expect(calculate(-5, 3, Operation.Add)).toBe(-2);
      expect(calculate(0.1, 0.2, Operation.Add)).toBeCloseTo(0.3);
    });

    it('should subtract two numbers correctly', () => {
      expect(calculate(5, 3, Operation.Subtract)).toBe(2);
      expect(calculate(3, 5, Operation.Subtract)).toBe(-2);
      expect(calculate(0.3, 0.1, Operation.Subtract)).toBeCloseTo(0.2);
    });

    it('should multiply two numbers correctly', () => {
      expect(calculate(5, 3, Operation.Multiply)).toBe(15);
      expect(calculate(-5, 3, Operation.Multiply)).toBe(-15);
      expect(calculate(0.1, 0.2, Operation.Multiply)).toBeCloseTo(0.02);
    });

    it('should divide two numbers correctly', () => {
      expect(calculate(6, 3, Operation.Divide)).toBe(2);
      expect(calculate(5, 2, Operation.Divide)).toBe(2.5);
      expect(calculate(-6, 3, Operation.Divide)).toBe(-2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculate(5, 0, Operation.Divide)).toThrow('Cannot divide by zero');
    });

    it('should return the second number when operation is None', () => {
      expect(calculate(5, 3, Operation.None)).toBe(3);
    });
  });

  describe('formatNumber function', () => {
    it('should format integers correctly', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
      expect(formatNumber(0)).toBe('0');
    });

    it('should handle decimal numbers correctly', () => {
      expect(formatNumber(1000.5)).toBe('1,000.5');
      expect(formatNumber(0.5)).toBe('0.5');
    });

    it('should handle string inputs correctly', () => {
      expect(formatNumber('1000')).toBe('1,000');
      expect(formatNumber('0.5')).toBe('0.5');
    });

    it('should handle just a decimal point', () => {
      expect(formatNumber('.')).toBe('0.');
    });

    it('should preserve decimal input as is', () => {
      expect(formatNumber('0.5')).toBe('0.5');
      expect(formatNumber('5.')).toBe('5.');
    });
  });

  describe('cleanNumberString function', () => {
    it('should remove commas from number strings', () => {
      expect(cleanNumberString('1,000')).toBe(1000);
      expect(cleanNumberString('1,000,000.5')).toBe(1000000.5);
    });

    it('should convert string to number', () => {
      expect(cleanNumberString('123')).toBe(123);
      expect(cleanNumberString('0.5')).toBe(0.5);
    });
  });
});