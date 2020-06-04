import {StringConditions} from "../../types/conditions";
import {validateLength} from "./validateLength";
import {validateMin} from "./validateMin";
import {validateMax} from "./validateMax";

export const stringValidate = (value: string, conditions: StringConditions): void => {
    validateLength(value, conditions);
    validateMin(value, conditions);
    validateMax(value, conditions);
};