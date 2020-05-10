import {StringSchema} from "../StringSchema";

describe('validate() method with no conditions', () => {
    it('should return string value', async () => {
        await expect(new StringSchema().validate('hello')).resolves.toBe('hello');
    });

    it('should throw Error', async () => {
        await expect(new StringSchema().validate(1)).rejects.toThrowError();
    });

    it('should return undefined', async () => {
        await expect(new StringSchema().validate(undefined)).resolves.toBe(undefined);
    });
});

describe('validate() method with conditions.required', () => {
    it('should throw Error', async () => {
        await (expect(new StringSchema().required(true).validate(undefined))).rejects.toThrowError()
    });

    it('should return undefined', async () => {
        await (expect(new StringSchema().required(false).validate(undefined))).resolves.toBe(undefined)
    });
});