import {string, StringSchema} from "./string";

describe('StringSchemaのテスト', () => {
   it('string()のテスト', () => {
      expect(string()).toBeInstanceOf(StringSchema);
   });

   it('required()のテスト', () => {
      expect(string().required()).toBeInstanceOf(StringSchema);
   });

   it('validate()でstringが引数の場合、バリデーションをパスすること', () => {
      expect(string().validate('hello')).toBe('hello');
   });

   it('validate()でnumberが引数の場合、Errorが投げられていること', () => {
      expect(() => string().validate(5)).toThrowError();
   });

   it('requiredがついているSchemaへのvalidate()の正常系', () => {
      expect(string().required().validate('hello')).toBe('hello')
   });

   it('requiredがついているSchemaへのvalidate()の異常系', () => {
      expect(() => string().required().validate(undefined)).toThrowError();
   });

   it('required()を実行していない場合、validate(undefined)で落ちないこと', () => {
      expect(string().validate(undefined)).toBe(undefined);
   })
});