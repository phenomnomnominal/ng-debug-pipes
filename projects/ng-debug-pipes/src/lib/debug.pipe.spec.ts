import { DebugPipe } from './debug.pipe';

describe('DebugPipe', () => {
  it('passes through any strings', () => {
    [
      {
        input: 'test'
      }, {
        input: '🦄'
      }, {
        input: `!!!`
      }
    ].forEach(({ input }) => {
      expect(DebugPipe.prototype.transform(input)).toEqual(input);
    });
  });
  it('transforms any non string to JSON', () => {
    [
      {
        input: 1000,
        output: '1000'
      }, {
        input: { foo: 'bar' },
        output: '{\n  "foo": "bar"\n}'
      }
    ].forEach(({ input, output }) => {
      expect(DebugPipe.prototype.transform(input)).toEqual(output);
    });
  });
});
