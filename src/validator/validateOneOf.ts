import {Conditions} from "../types/conditions";

export const validateOneOf = (value: any, conditions: Conditions) => {
    if (conditions.oneOf === undefined) return;
    if (!conditions.oneOf.includes(value)) throw new Error(`invalid: value is not included in ${conditions.oneOf}`)
};