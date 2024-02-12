// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();

    doStuffByTimeout(callback, 1000);

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, 1000);

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const callback = jest.fn();

    doStuffByInterval(callback, 1000);

    expect(setInterval).toHaveBeenCalled();
    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, 1000);

    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(3000);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = '../../README.md';

    await expect(readFileAsynchronously(pathToFile)).toBeTruthy();
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'README.md';

    await expect(readFileAsynchronously(pathToFile)).resolves.toBeNull();
  });

  test('should return file content if file exists', async () => {
    const pathToFile = '../../README.md';
    const fileContent = await readFileAsynchronously(pathToFile);

    expect(readFileAsynchronously(pathToFile)).resolves.toBe(fileContent);
  });
});
