import {StringSchema} from "../StringSchema";

describe('test length() method', () => {
    it('should change conditions value', () => {
        expect(new StringSchema().length(5)["conditions"]["length"]).toBe(5);
    });
});