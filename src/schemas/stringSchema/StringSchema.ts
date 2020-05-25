import {Schema} from "../schema/Schema";
import {baseValidate} from "../../validator/baseValidate";

export class StringSchema<T> extends Schema<T> {
    async validate<V extends T>(value: V): Promise<V> {
        baseValidate(value, this.conditions);
        this.stringValidate(value);
        return value;
    }

    private stringValidate(value: any): void {
        if (typeof value !== "string" && typeof value !== "undefined") throw new Error('invalid');
    }
}
