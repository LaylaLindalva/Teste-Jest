const ConversorDeBitcoin = require('../js/bitcoin');

describe('Suite de testes para front-end', () => {
  test('Verefica conversão de bitcoin para real', () => {
    expect(ConversorDeBitcoin(2)).toBe(600000);
  });
});
