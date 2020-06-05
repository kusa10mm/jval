import {NumberSchema} from "../schemas/numberSchema/NumberSchema";

export const number = (): NumberSchema<string> => {
    return new NumberSchema();
};