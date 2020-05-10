import {Conditions, StringSchema} from "../StringSchema";

describe('StringSchema constructor', () => {
   it('should generate instance with initialConditions', () => {
       const initialConditions: Conditions = {};
       expect(new StringSchema()["conditions"]).toStrictEqual(initialConditions);
   })
});