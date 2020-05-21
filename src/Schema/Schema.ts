export class Schema<T = any> {
    protected conditions: Conditions;

    constructor(conditions?: Conditions) {
        this.conditions = conditions ? conditions : {required: false, nullable: true}
    }

    required(): Schema<Exclude<T, undefined>> {
        return new Schema<Exclude<T, undefined>>({...this.conditions, required: true})
    }

    nullable(nullable: false): Schema<Exclude<T, null>>;
    nullable(nullable: true): Schema<T | null>;

    nullable(nullable: boolean) {
        return nullable
            ? new Schema<T | null>({...this.conditions, nullable})
            : new Schema<Exclude<T, null>>({...this.conditions, nullable});
    }

    async validate<V extends T>(value: V): Promise<V> {
        this.baseValidate(value);
        return value;
    }

    protected baseValidate(value: any): void {
        this.validateRequired(value);
        this.validateNullable(value);
    }

    private validateRequired(value: any): void {
        if(this.conditions.required && value === undefined) throw new Error('invalid')
    }

    private validateNullable(value: any): void {
        if(!this.conditions.nullable && value === null) throw new Error('invalid: nullable = false but value is null')
    }
}

export interface Conditions {
    required: boolean
    nullable: boolean
}

