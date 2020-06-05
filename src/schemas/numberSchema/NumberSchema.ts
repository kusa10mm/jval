import {Schema} from "../schema/Schema";
import {baseValidate} from "../../validator/baseValidate";
import {Conditions} from "../../types/conditions";
import {numberValidate} from "../../validator/number/numberValidate";

export class NumberSchema<T> extends Schema<T> {
    protected conditions: Conditions;

    constructor() {
        super();
        this.conditions = {required: false, nullable: true};
    }

    async validate<V extends T>(value: V): Promise<V> {
        baseValidate(value, this.conditions);

        if (value === null || value === undefined) return value;
        if (typeof value !== "number") throw new Error('invalid type');

        numberValidate(value, this.conditions);
        return value;
    }
}
