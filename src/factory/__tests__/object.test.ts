import {object} from "../object";
import {ObjectSchema} from "../../schemas/objectSchema/ObjectSchema";
import {string} from "../string";
import {number} from "../number";

describe('test object() method', () => {
    it('should generate ObjectSchema instance by object()', () => {
        expect(object()).toBeInstanceOf(ObjectSchema)
    });

    it('should set arg fields to conditions', () => {
        const fields = {
            foo: string().length(5),
            bar: number(),
            baz: object({hello: object()})
        };
        const objectSchema = object(fields);
        expect(objectSchema["conditions"]["fields"]).toStrictEqual(fields);
    });
});