// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: (fn: () => unknown) => fn,
}));

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Andrew' },
];

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: users })),
    create: () => {
      return {
        get: jest.fn(() => Promise.resolve({ data: users })),
      };
    },
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const spy = jest.spyOn(axios, 'create');
    const path = '/';
    const baseURL = 'https://jsonplaceholder.typicode.com';

    await throttledGetDataFromApi(path);
    expect(spy).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    const spy = jest.spyOn(axios, 'get');
    const path = '/';

    await throttledGetDataFromApi(path);
    await expect(spy).toHaveBeenCalledTimes(0);
  });

  test('should return response data', async () => {
    const path = '/';
    const response = await throttledGetDataFromApi(path);

    expect(response).toEqual(users);
  });
});
