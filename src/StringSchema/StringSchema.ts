export class StringSchema {
    private conditions: Conditions = {};

    required(required: boolean) {
        this.conditions.required = required;
        return this
    }

    async validate(value: any): Promise<string | undefined> {
        if (this.conditions.required !== undefined) {
            this.validateRequired(value)
        }

        if (typeof value !== "string" && typeof value !== "undefined") throw new Error('invalid');
        return value;
    }

    private validateRequired(value: any): void {
        if(this.conditions.required && value === undefined) throw new Error('invalid')
    }
}

export interface Conditions {
    required?: boolean
}