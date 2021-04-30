const sum = require('./sum');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('lança erro com string 5', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
    });
  test('conferir a msg', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/)
  })
  })
  