import {Conditions} from "../../../types/conditions";
import {Schema} from "../Schema";

describe('Schema constructor', () => {
    it('should generate instance with initialConditions', () => {
        const initialConditions: Conditions = {required: false, nullable: true};
        expect(new Schema()["conditions"]).toStrictEqual(initialConditions);
    });

    it('should generate instance with args conditions', () => {
        expect(new Schema({required: true, nullable: false, oneOf: ['test', 5]})["conditions"]).toStrictEqual({required: true, nullable: false, oneOf: ['test', 5]})
    })
});