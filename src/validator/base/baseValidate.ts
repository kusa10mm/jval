import {validateRequired} from "./validateRequired";
import {validateNullable} from "./validateNullable";
import {validateOneOf} from "./validateOneOf";
import {Conditions} from "../../types/conditions";
import {validateNotOneOf} from "./validateNotOneOf";

export const baseValidate = (value: any, conditions: Conditions) => {
    validateRequired(value, conditions);
    validateNullable(value, conditions);
    validateOneOf(value, conditions);
    validateNotOneOf(value, conditions);
};