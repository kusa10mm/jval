import {StringConditions} from "../../types/conditions";
import {validateLength} from "./validateLength";

export const stringValidate = (value: string, conditions: StringConditions): void => {
    validateLength(value, conditions);
};