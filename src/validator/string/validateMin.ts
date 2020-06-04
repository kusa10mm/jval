import {StringConditions} from "../../types/conditions";

export const validateMin = (value: string, conditions: StringConditions): void => {
  if (!conditions.min) return;
  if (value.length < conditions.min) throw new Error(`length of value is ${value.length} but the specified min length is ${conditions.min}`);
};