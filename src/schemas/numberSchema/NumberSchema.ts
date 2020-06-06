import {Schema} from "../schema/Schema";
import {baseValidate} from "../../validator/base/baseValidate";
import {NumberConditions} from "../../types/conditions";
import {numberValidate} from "../../validator/number/numberValidate";

export class NumberSchema<T> extends Schema<T> {
    protected conditions: NumberConditions;

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

    min(num: number): NumberSchema<T> {
        this.conditions.min = num;
        return this;
    }

    max(num: number): NumberSchema<T> {
        this.conditions.max = num;
        return this;
    }

    moreThan(num: number): NumberSchema<T> {
        this.conditions.min = num;
        return this;
    }

    lessThan(num: number): NumberSchema<T> {
        this.conditions.min = num;
        return this;
    }
}
