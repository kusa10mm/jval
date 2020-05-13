import {Schema} from "../Schema";

describe('validate() method with no conditions', () => {
    it('should return arg value', async () => {
        await expect(new Schema().validate('value')).resolves.toBe('value');
    });
});

describe('validate() method with conditions.required', () => {
    it('should throw Error', async () => {
        await (expect(new Schema().required(true).validate(undefined))).rejects.toThrowError()
    });

    it('should return undefined', async () => {
        await (expect(new Schema().required(false).validate(undefined))).resolves.toBe(undefined)
    });
});