import {Schema} from "../Schema";

describe('nullable() method', () => {
    it('should change conditions.nullable to arg value', () => {
        expect(new Schema().nullable(true)["conditions"]["nullable"]).toBe(true);
        expect(new Schema().nullable(false)["conditions"]["nullable"]).toBe(false);
    });
});