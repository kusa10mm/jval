import {NumberConditions} from "../../../types/conditions";
import {numberValidate} from "../numberValidate";
import {mocked} from "ts-jest/utils";
import {validateMin} from "../validateMin";
import {validateMax} from "../validateMax";
import {validateLessThan} from "../validateLessThan";
import {validateMoreThan} from "../validateMoreThan";

jest.mock('../validateMin');
jest.mock('../validateMax');
jest.mock('../validateLessThan');
jest.mock('../validateMoreThan');

describe('test numberValidate function', () => {
   it('should call validators with value and conditions', () => {
       const conditions: NumberConditions = {required: false, nullable: true};
       numberValidate(5, conditions);
       expect(mocked(validateMin)).toBeCalledWith(5, conditions);
       expect(mocked(validateMax)).toBeCalledWith(5, conditions);
       expect(mocked(validateLessThan)).toBeCalledWith(5, conditions);
       expect(mocked(validateMoreThan)).toBeCalledWith(5, conditions);
   })
});