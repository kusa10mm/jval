import {Schema} from "../Schema";

describe('oneOf() method', () => {
it('should change conditions.oneOf to values', () => {
    expect(new Schema().oneOf<string | number>(['hello', 3])["conditions"]["oneOf"]).toStrictEqual(['hello', 3])
})
});