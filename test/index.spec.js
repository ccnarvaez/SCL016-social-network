// importamos la funcion que vamos a testear
import login from '../src/views/login';

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('login render', () => {
  it('should render without crashing', () => {
    expect(login).not.toThrow('error');
  });
});
