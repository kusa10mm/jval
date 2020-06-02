import {StringConditions} from "../../types/conditions";

export const validateLength = (value: string, conditions: StringConditions): void => {
    if (!conditions.length) return;
    if (value.length !== conditions.length) throw new Error(`length of value is ${value.length} but the　specified length is ${conditions.length}`)
};