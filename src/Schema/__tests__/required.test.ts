import {Schema} from "../Schema";

describe('required() method', () => {
    it('should return Schema instance', () => {
        expect(new Schema().required(true)).toBeInstanceOf(Schema)
    });

    it('should change conditions to arg value', () => {
        expect(new Schema().required(false)["conditions"]["required"]).toBe(false);
    });
});
