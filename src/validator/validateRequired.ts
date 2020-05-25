import {Conditions} from "../types/conditions";

export const validateRequired = (value: any, conditions: Conditions): void => {
    if (conditions.required && value === undefined) throw new Error('invalid')
};