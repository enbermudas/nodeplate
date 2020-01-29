const { hello } = require('../src');

describe('foo', () => {
  test('It should return a hello world message', () => {
    expect(hello()).toEqual('Hello world!');
  });
});
