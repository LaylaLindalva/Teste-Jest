const ConversorDeTemperatura = (celsius) => {
  const temperatura = (celsius * 1.8) + 32;
  return temperatura;
};

module.exports = ConversorDeTemperatura;
