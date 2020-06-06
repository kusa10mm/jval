import {NumberConditions} from "../../../types/conditions";
import {validateMoreThan} from "../validateMoreThan";

describe('test validateMoreThan function', () => {
    it('should throw error when value equals moreThan', () => {
        const value = 5;
        const conditions: NumberConditions = {required: true, nullable: false, moreThan: 5};

        expect(() => validateMoreThan(value, conditions)).toThrowError()
    });

    it('should not throw error when value is greater than moreThan', () => {
        const value = 5.1;
        const conditions: NumberConditions = {required: true, nullable: false, moreThan: 5};

        expect(validateMoreThan(value, conditions)).toBeUndefined();
    })
});