import {StringConditions} from "../../../types/conditions";
import {validateMin} from "../validateMin";

describe('test validateMin function', () => {
   it('should throw error when value.length is less than min length', () => {
      const value = 'hello';
      const conditions: StringConditions = {required: true, nullable: false, min: 6};

      expect(() => validateMin(value, conditions)).toThrowError();
   });
});