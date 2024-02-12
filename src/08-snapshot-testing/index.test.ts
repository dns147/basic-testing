// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const likedList = generateLinkedList([1, 2, 3, 4, 5]);

    expect(likedList).toStrictEqual({
      next: {
        next: {
          next: {
            next: { next: { next: null, value: null }, value: 5 },
            value: 4,
          },
          value: 3,
        },
        value: 2,
      },
      value: 1,
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const likedList = generateLinkedList([1, 2, 3, 4, 5]);

    expect(likedList).toMatchSnapshot();
  });
});
