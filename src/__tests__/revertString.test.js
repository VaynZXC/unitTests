const revertString = require('../revertString.js');

describe('test revertString', () => {
  it('revert asd to equal dsa', () => {
    const result = revertString('asd')
    expect(result).toBe('dsa');
  })
  it('revert qwe to equal ewq', () => {
    const result = revertString('qwe')
    expect(result).toBe('ewq');
  })
  it('revert 123 to equal 321', () => {
    const result = revertString('123')
    expect(result).toBe('321');
  })
  it('revert a s d to equal d s a', () => {
    const result = revertString('a s d')
    expect(result).toBe('d s a');
  })
});
