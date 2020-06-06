import {NumberConditions} from "../../types/conditions";

export const validateMoreThan = (value: number, conditions: NumberConditions): void => {
    if (!conditions.moreThan) return;
    if (value <= conditions.moreThan) throw new Error(`value must be greater than ${conditions.moreThan}, but the value is ${value}`);
};