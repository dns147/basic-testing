// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  {
    name: 'should add two numbers',
    a: 1,
    b: 2,
    action: Action.Add,
    expected: 3,
  },
  {
    name: 'should add two numbers',
    a: 2,
    b: 2,
    action: Action.Add,
    expected: 4,
  },
  {
    name: 'should add two numbers',
    a: 3,
    b: 2,
    action: Action.Add,
    expected: 5,
  },
  {
    name: 'should subtract two numbers',
    a: 3,
    b: 2,
    action: Action.Subtract,
    expected: 1,
  },
  {
    name: 'should subtract two numbers',
    a: 2,
    b: 3,
    action: Action.Subtract,
    expected: -1,
  },
  {
    name: 'should multiply two numbers',
    a: 3,
    b: 2,
    action: Action.Multiply,
    expected: 6,
  },
  {
    name: 'should divide two numbers',
    a: 8,
    b: 2,
    action: Action.Divide,
    expected: 4,
  },
  {
    name: 'should exponentiate two numbers',
    a: 8,
    b: 2,
    action: Action.Exponentiate,
    expected: 64,
  },
  {
    name: 'should return null for invalid action',
    a: 8,
    b: 2,
    action: '--',
    expected: null,
  },
  {
    name: 'should return null for invalid arguments',
    a: 8,
    b: '',
    action: Action.Divide,
    expected: null,
  },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ name, expected, ...testData }) => {
    test(name, () => {
      expect(simpleCalculator({ ...testData })).toBe(expected);
    });
  });
});
