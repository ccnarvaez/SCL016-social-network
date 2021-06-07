// importamos la funcion que vamos a testear
import login from '../src/views/login';
import register from './components/register.js';

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

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('register render', () => {
  it('should render without crashing', () => {
    expect(register).not.toThrow('error');
  });
});
