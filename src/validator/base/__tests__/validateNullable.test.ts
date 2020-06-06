import {validateNullable} from "../validateNullable";
import {Conditions} from "../../../types/conditions";

describe('test validateNullable() method', () => {
    it('should not throw error with nullable true', () => {
        const value = null;
        const conditions: Conditions = {required: false, nullable: true};
        expect(validateNullable(value, conditions)).toBeUndefined();
    });

    it('should throw error with nullable false', () => {
        const value = null;
        const conditions: Conditions = {required: false, nullable: false};
        expect(() => validateNullable(value, conditions)).toThrowError();
    })
});