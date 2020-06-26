import {ObjectSchema} from "../schemas/objectSchema/ObjectSchema";
import {Schema} from "../schemas/schema/Schema";

export const object = <T extends object>(fields?: ObjectSchemaField<T>): ObjectSchema => {
    return new ObjectSchema(fields);
};

export type ObjectSchemaField<T extends object> = {
    [key in keyof T]: Schema<T[key]>
};
