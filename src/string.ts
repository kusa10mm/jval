import {StringSchema} from "./StringSchema/StringSchema";

export const string = (): StringSchema => {
    return new StringSchema();
};