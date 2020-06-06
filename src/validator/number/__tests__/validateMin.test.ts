import {validateMin} from "../validateMin";
import {NumberConditions} from "../../../types/conditions";

describe('test validateMin function', () => {
   it('should throw error when value is less than min', () => {
       const value = 4.9;
       const conditions: NumberConditions = {required: true, nullable: false, min: 5};

       expect(() => validateMin(value, conditions)).toThrowError()
   });

    it('should not throw error when value equal to min', () => {
        const value = 5;
        const conditions: NumberConditions = {required: true, nullable: false, min: 5};

        expect(validateMin(value, conditions)).toBeUndefined();
    });
});