export class Schema<T> {
    protected conditions: Conditions;

    constructor(conditions?: Conditions) {
        this.conditions = conditions ? conditions : {required: false}
    }

    required(): Schema<Exclude<T, undefined>> {
        return new Schema<Exclude<T, undefined>>({...this.conditions, required: true})
    }

    async validate(value: any): Promise<T> {
        this.baseValidate(value);
        return value;
    }

    protected baseValidate(value: any): void {
        this.validateRequired(value)
    }

    private validateRequired(value: any): void {
        if(this.conditions.required && value === undefined) throw new Error('invalid')
    }
}

export interface Conditions {
    required: boolean
}