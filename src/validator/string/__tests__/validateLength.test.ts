import {validateLength} from "../validateLength";
import {StringConditions} from "../../../types/conditions";

describe('test validateLength function', () => {
   it('should not throw error with length not set', () => {
       const value = 'hello';
       const conditions: StringConditions = {required: true, nullable: false};

       expect(validateLength(value, conditions)).toBeUndefined();
   });

   it('should not throw error with value and condition are the same length', () => {
       const value = 'hello';
       const conditions: StringConditions = {required: true, nullable: false, length: 5};

       expect(validateLength(value, conditions)).toBeUndefined();
   });

   it('should throw error with value and conditions are the different length', () => {
       const value = 'hello world';
       const conditions: StringConditions = {required: true, nullable: false, length: 5};

       expect(() => validateLength(value, conditions)).toThrowError();
   })
});