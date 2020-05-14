import {Conditions, Schema} from "../Schema";

describe('Schema constructor', () => {
    it('should generate instance with initialConditions', () => {
        const initialConditions: Conditions = {required: false};
        expect(new Schema()["conditions"]).toStrictEqual(initialConditions);
    })
});