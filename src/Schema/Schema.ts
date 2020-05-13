export class Schema {
    protected conditions: Conditions = {};

    required(required: boolean) {
        this.conditions.required = required;
        return this
    }

    async validate(value: any): Promise<any> {
        this.baseValidate(value);
        return value;
    }

    protected baseValidate(value: any): void {
        if (this.conditions.required !== undefined) {
            this.validateRequired(value)
        }
    }

    private validateRequired(value: any): void {
        if(this.conditions.required && value === undefined) throw new Error('invalid')
    }
}

export interface Conditions {
    required?: boolean
}