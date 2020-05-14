import {Schema} from "../Schema";

describe('required() method', () => {
    it('should change conditions to "true"', () => {
        expect(new Schema().required()["conditions"]["required"]).toBe(true);
    });
});
