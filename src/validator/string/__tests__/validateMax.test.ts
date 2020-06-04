import {StringConditions} from "../../../types/conditions";
import {validateMax} from "../validateMax";

describe('test validateMax function', () => {
    it('should throw error when value.length is greater than max length', () => {
        const value = 'hello';
        const conditions: StringConditions = {required: true, nullable: false, max: 4};

        expect(() => validateMax(value, conditions)).toThrowError();
    });
});