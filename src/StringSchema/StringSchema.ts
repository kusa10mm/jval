import {Schema} from "../Schema/Schema";

export class StringSchema<T> extends Schema<T> {
    async validate<V extends T>(value: V): Promise<V> {
        this.baseValidate(value);
        this.stringValidate(value);
        return value;
    }

    private stringValidate(value: any): void {
        if (typeof value !== "string" && typeof value !== "undefined") throw new Error('invalid');
    }
}
