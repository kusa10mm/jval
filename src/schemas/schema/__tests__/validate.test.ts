import {Schema} from "../Schema";

describe('validate() method with no conditions', () => {
    it('should return arg value', async () => {
        await expect(new Schema().validate('value')).resolves.toBe('value');
    });
});