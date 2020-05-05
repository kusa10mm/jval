import {string, validate} from "./string";

describe('', () => {
   it('stringの正常系', () => {
      expect(validate(string(), 'hello')).toBe('hello')
   })
});