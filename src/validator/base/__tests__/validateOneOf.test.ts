import {Conditions} from "../../../types/conditions";
import {validateOneOf} from "../validateOneOf";

describe('test validateOneOf() method', () => {
    it('should not throw error when oneOf condition is not set', () => {
        const value = 'hello';
        const conditions: Conditions = {
            required: false, nullable: true
        };
        expect(validateOneOf(value, conditions)).toBeUndefined();
    });

    it('should not throw error when the value is included in oneOf condition', () => {
        const value = 'hello';
        const conditions: Conditions = {
            required: false, nullable: true, oneOf: ['hello', 3, false, null, undefined]
        };
        expect(validateOneOf(value, conditions)).toBeUndefined();
    });

    it('should throw error when the value is not included in oneOf condition', () => {
        const value = 'world';
        const conditions: Conditions = {
            required: false, nullable: true, oneOf: ['hello', 3, false, null, undefined]
        };
        expect(() => validateOneOf(value, conditions)).toThrowError();
    })
});