import {StringConditions} from "../../types/conditions";

export const validateLength = (value: any, conditions: StringConditions): void => {
    if (!conditions.length) return;
    if (typeof value !== "string") throw new Error('value is not string');
    if (value.length !== conditions.length) throw new Error(`length of value is ${value.length} but the　specified length is ${conditions.length}`)
};