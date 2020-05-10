import {StringSchema} from "../StringSchema";

describe('required() method', () => {
    it('should return StringSchema instance', () => {
        expect(new StringSchema().required(true)).toBeInstanceOf(StringSchema)
    });

    it('should change conditions to arg value', () => {
        expect(new StringSchema().required(false)["conditions"]["required"]).toBe(false);
    });
});
