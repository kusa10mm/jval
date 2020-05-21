import {Schema} from "../Schema";

describe('validate() method with no conditions', () => {
    it('should return arg value', async () => {
        await expect(new Schema().validate('value')).resolves.toBe('value');
    });
});

describe('validate() method with conditions.required', () => {
    it('should throw Error', async () => {
        await expect(new Schema().required().validate(undefined)).rejects.toThrowError()
    });

    it('should return value', async () => {
        await expect(new Schema().required().validate('hello')).resolves.toBe('hello')
    });
});

describe('validate() method with conditions.nullable', () => {
    it('should throw Error', async () => {
        await expect(new Schema().nullable(false).validate(null)).rejects.toThrowError()
    });

    it('should return null', async () => {
        await expect(new Schema().nullable(true).validate(null)).resolves.toBe(null);
    })
});