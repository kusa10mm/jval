import {NumberConditions} from "../../../types/conditions";
import {validateLessThan} from "../validateLessThan";

describe('test validateLessThan function', () => {
    it('should throw error when value equals lessThan', () => {
        const value = 5;
        const conditions: NumberConditions = {required: true, nullable: false, lessThan: 5};

        expect(() => validateLessThan(value, conditions)).toThrowError()
    });

    it('should not throw error when value is less than lessThan', () => {
        const value = 4.9;
        const conditions: NumberConditions = {required: true, nullable: false, lessThan: 5};

        expect(validateLessThan(value, conditions)).toBeUndefined();
    })
});