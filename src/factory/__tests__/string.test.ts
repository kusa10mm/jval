import {string} from "../string";
import {StringSchema} from "../../schemas/stringSchema/StringSchema";

describe('test string() method', () => {
   it('should generate StringSchema instance by string()', () => {
      expect(string()).toBeInstanceOf(StringSchema);
   });
});