import {Schema} from "../Schema";

describe('validate() method with no conditions', () => {
    it('should return arg value', async () => {
        await expect(new Schema().validate('value')).resolves.toBe('value');
    });
});

describe('validate() method with conditions.', () => {
    it('should throw Error', async () => {
        const schema = new Schema().oneOf(['hello', 5, false, null, undefined]);
        await expect(schema.validate(3)).rejects.toThrowError()
    });

    it('should return value', async () => {
        await expect(new Schema().oneOf(['hello', 5]).validate('hello')).resolves.toBe('hello');
    });

    it('should return value', async () => {
        const schema = new Schema().oneOf(['hello', 5, false, null, undefined]);
        await expect(schema.validate(undefined)).resolves.toBe(undefined);
    });
});