export const string = (): StringSchema => {
    return new StringSchema();
};

export class StringSchema {
    conditions: {
      required: boolean;
    };

    constructor() {
        this.conditions = {
            required: false
        }
    }

    required() {
        this.conditions.required = true;
        return this
    }

    validate(value: any): string | undefined {
        if (this.conditions.required && typeof value === "undefined") throw new Error("value is undefined");
        if (typeof value !== "string" && typeof value !== "undefined") throw new Error('typeof value is not string');
        return value;
    }
}