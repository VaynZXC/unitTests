const definePrime = require('../definePrime.js');

describe('test definePrime', () => {
  const simple = 17;
  const complex = 18;
  
  it('should operate correctly with simple, conplex and invalid number', () => {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    expect(definePrime(1001)).toBe('Данные неверны');
  })
});
