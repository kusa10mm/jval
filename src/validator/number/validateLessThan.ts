import {NumberConditions} from "../../types/conditions";

export const validateLessThan = (value: number, conditions: NumberConditions): void => {
    if (!conditions.lessThan) return;
    if (value >= conditions.lessThan) throw new Error(`value must be less than ${conditions.lessThan}, but the value is ${value}`);
};