import {stringValidate} from "../stringValidate";
import {StringConditions} from "../../../types/conditions";
import {mocked} from "ts-jest/utils";
import {validateStringType} from "../validateStringType";
import {validateLength} from "../validateLength";

jest.mock('../validateStringType');
jest.mock('../validateLength');

describe('test stringValidate function', () => {
   it('should call validators with value and conditions', () => {
       const conditions: StringConditions = {required: false, nullable: true};
       stringValidate('hello', conditions);
       expect(mocked(validateStringType)).toBeCalledWith('hello');
       expect(mocked(validateLength)).toBeCalledWith('hello', conditions)
   })
});