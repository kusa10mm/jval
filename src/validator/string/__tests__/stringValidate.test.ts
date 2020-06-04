import {stringValidate} from "../stringValidate";
import {StringConditions} from "../../../types/conditions";
import {mocked} from "ts-jest/utils";
import {validateLength} from "../validateLength";

jest.mock('../validateLength');

describe('test stringValidate function', () => {
   it('should call validators with value and conditions', () => {
       const conditions: StringConditions = {required: false, nullable: true};
       stringValidate('hello', conditions);
       expect(mocked(validateLength)).toBeCalledWith('hello', conditions);
   });
});