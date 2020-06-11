import {Conditions} from "../../types/conditions";

export const validateNotOneOf = (value: any, conditions: Conditions) => {
    if (conditions.notOneOf === undefined) return;
    if (conditions.notOneOf.includes(value)) throw new Error(`invalid: value is included in ${conditions.oneOf}`)
};