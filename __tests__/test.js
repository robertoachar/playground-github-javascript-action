import sum from '../src';

describe('Tests', () => {
  test('simple test', () => {
    expect(sum(5, 5)).toBe(10);
  });
});
