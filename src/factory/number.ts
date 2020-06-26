import {NumberSchema} from "../schemas/numberSchema/NumberSchema";

export const number = (): NumberSchema<number> => {
    return new NumberSchema();
};