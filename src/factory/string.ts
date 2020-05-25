import {StringSchema} from "../schemas/stringSchema/StringSchema";

export const string = (): StringSchema<string> => {
    return new StringSchema();
};