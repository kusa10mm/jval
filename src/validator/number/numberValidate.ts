import {NumberConditions} from "../../types/conditions";
import {validateLessThan} from "./validateLessThan";
import {validateMoreThan} from "./validateMoreThan";
import {validateMin} from "./validateMin";
import {validateMax} from "./validateMax";

export const numberValidate = (value: number, conditions: NumberConditions): void => {
    validateMin(value, conditions);
    validateMax(value, conditions);
    validateLessThan(value, conditions);
    validateMoreThan(value, conditions);
};