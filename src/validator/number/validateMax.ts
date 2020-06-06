import {NumberConditions} from "../../types/conditions";

export const validateMax = (value: number, conditions: NumberConditions): void => {
    if (!conditions.max) return;
    if (value > conditions.max) throw new Error(`value: ${value} is greater than specified max: ${conditions.max}`);
};