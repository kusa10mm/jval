import {Schema} from "../Schema/Schema";

export class StringSchema extends Schema {
    async validate(value: any): Promise<string | undefined> {
        this.baseValidate(value);
        this.stringValidate(value);
        return value;
    }

    private stringValidate(value: any): void {
        if (typeof value !== "string" && typeof value !== "undefined") throw new Error('invalid');
    }
}
