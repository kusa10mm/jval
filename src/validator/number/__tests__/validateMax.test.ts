import {NumberConditions} from "../../../types/conditions";
import {validateMax} from "../validateMax";

describe('test validateMax function', () => {
    it('should throw error when value is greater than max', () => {
        const value = 5.1;
        const conditions: NumberConditions = {required: true, nullable: false, max: 5};

        expect(() => validateMax(value, conditions)).toThrowError()
    });

    it('should not throw error when value equal to max', () => {
        const value = 5;
        const conditions: NumberConditions = {required: true, nullable: false, max: 5};

        expect(validateMax(value, conditions)).toBeUndefined();
    });
});