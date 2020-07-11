import {Schema} from "../schema/Schema";
import {ObjectConditions} from "../../types/conditions";
import {baseValidate} from "../../validator/base/baseValidate";
import {ObjectSchemaField} from "../../factory/object";
import {objectValidate} from "../../validator/object/objectValidate";

export class ObjectSchema<T extends object = object> extends Schema<T> {
    protected conditions: ObjectConditions<T>;

    constructor(fields?: ObjectSchemaField<T>) {
        super();
        this.conditions = {required: false, nullable: true, fields};
    }

    async validate<V extends T>(value: V): Promise<V> {
        baseValidate(value, this.conditions);

        if (value === null || value === undefined) return value;
        if (typeof value !== "object") throw new Error('invalid type');

        await objectValidate(value, this.conditions);

        return value;
    }
}
