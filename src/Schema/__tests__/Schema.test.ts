import {Conditions, Schema} from "../Schema";

describe('Schema constructor', () => {
    it('should generate instance with initialConditions', () => {
        const initialConditions: Conditions = {required: false, nullable: true};
        expect(new Schema()["conditions"]).toStrictEqual(initialConditions);
    });

    it('should generate instance with args conditions', () => {
        expect(new Schema({required: true, nullable: false})["conditions"]).toStrictEqual({required: true, nullable: false})
    })
});