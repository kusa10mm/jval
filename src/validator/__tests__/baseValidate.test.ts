import {baseValidate} from "../baseValidate";
import {mocked} from "ts-jest/utils";
import {validateNullable} from "../validateNullable";
import {validateOneOf} from "../validateOneOf";
import {validateRequired} from "../validateRequired";
import {Conditions} from "../../types/conditions";

jest.mock('../validateRequired');
jest.mock('../validateNullable');
jest.mock('../validateOneOf');

describe('test baseValidate() function', () => {
   it('should call validators with value and conditions', () => {
       const conditions: Conditions = {required: false, nullable: true};
       baseValidate('hello', conditions);
       expect(mocked(validateRequired)).toBeCalledWith('hello', {required: false, nullable: true});
       expect(mocked(validateNullable)).toBeCalledWith('hello', {required: false, nullable: true});
       expect(mocked(validateOneOf)).toBeCalledWith('hello', {required: false, nullable: true});
    })
});