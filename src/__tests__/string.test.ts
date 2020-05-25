import {string} from "../string";
import {StringSchema} from "../StringSchema/StringSchema";

describe('test string() method', () => {
   it('should generate StringSchema instance by string()', () => {
      expect(string()).toBeInstanceOf(StringSchema);
   });
});