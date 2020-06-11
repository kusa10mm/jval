import {Conditions} from "../../../types/conditions";
import {validateNotOneOf} from "../validateNotOneOf";

describe('test validateNotOneOf() method', () => {
    it('should not throw error when oneOf condition is not set', () => {
        const value = 'hello';
        const conditions: Conditions = {
            required: false, nullable: true
        };
        expect(validateNotOneOf(value, conditions)).toBeUndefined();
    });

    it('should not throw error when the value is not included in notOneOf condition', () => {
        const value = 'hello';
        const conditions: Conditions = {
            required: false, nullable: true, notOneOf: ['world', 3, false, null, undefined]
        };
        expect(validateNotOneOf(value, conditions)).toBeUndefined();
    });

    it('should throw error when the value is included in notOneOf condition', () => {
        const value = 'hello';
        const conditions: Conditions = {
            required: false, nullable: true, notOneOf: ['hello', 3, false, null, undefined]
        };
        expect(() => validateNotOneOf(value, conditions)).toThrowError();
    })
});