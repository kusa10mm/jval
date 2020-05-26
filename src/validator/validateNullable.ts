import {Conditions} from "../types/conditions";

export const validateNullable = (value: any, conditions: Conditions): void => {
    if (!conditions.nullable && value === null) throw new Error('invalid: nullable=false but the value is null')
};