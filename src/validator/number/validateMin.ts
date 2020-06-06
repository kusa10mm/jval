import {NumberConditions} from "../../types/conditions";

export const validateMin = (value: number, conditions: NumberConditions): void => {
    if (!conditions.min) return;
    if (value < conditions.min) throw new Error(`value: ${value} is less than specified min: ${conditions.min}`);
};