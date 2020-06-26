import {object} from "../object";
import {ObjectSchema} from "../../schemas/objectSchema/ObjectSchema";

describe('test object() method', () => {
    it('should generate ObjectSchema instance by object()', () => {
        expect(object()).toBeInstanceOf(ObjectSchema)
    });
});