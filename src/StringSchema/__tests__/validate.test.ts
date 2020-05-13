import {StringSchema} from "../StringSchema";

describe('validate() method with no conditions', () => {
    it('should return string value', async () => {
        await expect(new StringSchema().validate('hello')).resolves.toBe('hello');
    });

    it('should throw Error', async () => {
        await expect(new StringSchema().validate(1)).rejects.toThrowError();
    });
});