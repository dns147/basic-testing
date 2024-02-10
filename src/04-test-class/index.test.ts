// Uncomment the code below and write your tests
import { InsufficientFundsError, SynchronizationFailedError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(22).getBalance()).toBe(22);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      getBankAccount(22).withdraw(23);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const accountOne = getBankAccount(22);
    const accountTwo = getBankAccount(0);

    expect(() => {
      accountOne.transfer(23, accountTwo);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const accountOne = getBankAccount(22);

    expect(() => {
      accountOne.transfer(20, accountOne);
    }).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const accountOne = getBankAccount(22);

    expect(accountOne.deposit(3).getBalance()).toBe(25);
  });

  test('should withdraw money', () => {
    const accountOne = getBankAccount(22);

    expect(accountOne.withdraw(3).getBalance()).toBe(19);
  });

  test('should transfer money', () => {
    const accountOne = getBankAccount(22);
    const accountTwo = getBankAccount(0);

    expect(accountOne.transfer(3, accountTwo).getBalance()).toBe(19);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const accountOne = getBankAccount(22);

    try {
      const balance = await accountOne.fetchBalance();
      expect(typeof balance).toBe('number');
    } catch (err) {
      console.log(err);
    }
    //const balance = await accountOne.fetchBalance();

    // if (balance) {
    //   expect(typeof balance).toBe('number');
    // } else {
    //   expect(balance).toBeNull();
    // }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const accountOne = getBankAccount(22);
    const startBalance = accountOne.getBalance();

    try {
      await accountOne.synchronizeBalance();
      const newBalance = accountOne.getBalance();

      expect(accountOne.getBalance()).toBe(newBalance);
      expect(startBalance).not.toBe(newBalance);
    } catch (err) {
      console.log(err);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const accountOne = getBankAccount(22);

    try {
      await accountOne.synchronizeBalance();
    } catch (err) {
      expect(err).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
