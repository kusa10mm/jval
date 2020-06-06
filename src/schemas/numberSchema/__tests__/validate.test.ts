import {NumberSchema} from "../NumberSchema";

describe('test NumberSchema validate method', () => {
   it('should return number value', async () => {
      await expect(new NumberSchema().validate(5)).resolves.toBe(5);
   });

   it('should throw Error with not number value', async () => {
       await expect(new NumberSchema().validate('hello')).rejects.toThrowError();
   });
});