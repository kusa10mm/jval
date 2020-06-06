import {Conditions} from "../../../types/conditions";
import {validateRequired} from "../validateRequired";

describe('test validateRequired() method', () => {
    it('should not throw error with required false', () => {
        const value = undefined;
        const conditions: Conditions = {required: false, nullable: true};
        expect(validateRequired(value, conditions)).toBeUndefined();
    });

    it('should throw error with required true', () => {
        const value = undefined;
        const conditions: Conditions = {required: true, nullable: true};
        expect(() => validateRequired(value, conditions)).toThrowError();
    });
});