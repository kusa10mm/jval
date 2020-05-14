import {StringSchema} from "./StringSchema/StringSchema";

export const string = (): StringSchema<string> => {
    return new StringSchema();
};