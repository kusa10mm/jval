import {Schema} from "../schema/Schema";
import {baseValidate} from "../../validator/baseValidate";
import {StringConditions} from "../../types/conditions";
import {stringValidate} from "../../validator/string/stringValidate";

export class StringSchema<T> extends Schema<T> {
    protected conditions: StringConditions;

    constructor() {
        super();
        this.conditions = {required: false, nullable: true};
    }

    async validate<V extends T>(value: V): Promise<V> {
        baseValidate(value, this.conditions);

        if (value === null || value === undefined) return value;
        if (typeof value !== "string") throw new Error('invalid type');

        stringValidate(value, this.conditions);
        return value;
    }

    length(length: number): StringSchema<T> {
        this.conditions.length = length;
        return this
    }
}
