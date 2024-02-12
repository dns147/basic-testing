// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 4, action: Action.Add })).toBe(5);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 4, action: Action.Subtract })).toBe(-3);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 7, action: Action.Multiply })).toBe(35);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 7, b: 2, action: Action.Divide })).toBe(3.5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Exponentiate })).toBe(
      25,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 5, b: 2, action: '++' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 5, b: '', action: Action.Add })).toBeNull();
  });
});
