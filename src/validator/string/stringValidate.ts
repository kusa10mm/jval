import {StringConditions} from "../../types/conditions";
import {validateStringType} from "./validateStringType";
import {validateLength} from "./validateLength";

export const stringValidate = (value: any, conditions: StringConditions): void => {
    validateStringType(value);
    validateLength(value, conditions);
};