const ComparaSenhas = require('../js/senhas');

describe('Suite de testes para front-end', () => {
    test('Verefica se as senhas são iguais', () => {
      expect(ComparaSenhas(26)).not.toBe(26);
    });
});