import {objectValidate} from "../objectValidate";
import {ObjectConditions} from "../../../types/conditions";
import {string} from "../../../factory/string";

describe('objectValidate function tests', () => {

    it('should not throw error with required field', async () => {
        const conditions: ObjectConditions<object> = {
            required: false,
            nullable: true,
            fields: {foo: string().required()}
        };
        const value = {foo: 'hello'};

        await expect(objectValidate(value, conditions)).resolves.toBeUndefined();
    });

    it('should throw error without required field', async () => {
        const conditions: ObjectConditions<object> = {
            required: false,
            nullable: true,
            fields: {foo: string().required()}
        };
        const value = {bar: 'hello'};

        await expect(objectValidate(value, conditions)).rejects.toThrowError();
    });

    it('should not throw error with not required property', async () => {
        const conditions: ObjectConditions<object> = {
            required: false,
            nullable: true,
            fields: {foo: string()}
        };
        const value = {bar: 'world'};

        await expect((objectValidate(value, conditions))).resolves.toBeUndefined();
    });

    it('should throw error', async () => {
        const conditions: ObjectConditions<object> = {
            required: false,
            nullable: true,
            fields: {foo: string().required()}
        };
        const value = {hello: 'world'};

        await expect(objectValidate(value, conditions)).rejects.toThrowError();
    });

    it('should throw error with different type', async () => {
        const conditions: ObjectConditions<object> = {
            required: false,
            nullable: true,
            fields: {foo: string()}
        };

        const value = {foo: 2};

        await expect(objectValidate(value, conditions)).rejects.toThrowError();
    })
});