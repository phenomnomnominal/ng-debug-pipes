import { ConsolePipe } from './console.pipe';

describe('ConsolePipe', () => {
  it('passes through any strings', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(null);

    ConsolePipe.prototype.transform('THIS SHOULD BE LOGGED');

    expect(spy).toHaveBeenCalledWith('THIS SHOULD BE LOGGED');
  });
  it('always returns an empty string', () => {
    expect(ConsolePipe.prototype.transform('THIS SHOULD BE LOGGED')).toEqual('');
  });
});
