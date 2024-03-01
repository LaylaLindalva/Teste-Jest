const ConversorDeTemperatura = require('../js/conversor.temperatura');

describe('Suite de testes para front-end', () => {
    test('Verefica conversão de Celsius para Fahrenheit', () => {
      expect(ConversorDeTemperatura(25)).toBe(77);
    });
});
  