import {string} from "../string";
import {StringSchema} from "../StringSchema/StringSchema";

describe('string()のテスト', () => {
   it('string()によってStringSchemaインスタンスが生成されること', () => {
      expect(string()).toBeInstanceOf(StringSchema);
   });
});