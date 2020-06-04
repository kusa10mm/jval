import {StringConditions} from "../../types/conditions";

export const validateMax = (value: string, conditions: StringConditions): void => {
    if (!conditions.max) return;
    if (value.length > conditions.max) throw new Error(`length of value is ${value.length} but the specified max length is ${conditions.max}`);
};