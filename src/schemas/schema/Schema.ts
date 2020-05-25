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

    oneOf<V extends T>(values: V[]): Schema<V> {
        return new Schema<V>({...this.conditions, oneOf: values})
    }

    async validate<V extends T>(value: V): Promise<V> {
        this.baseValidate(value);
        return value;
    }

    protected baseValidate(value: any): void {
        this.validateRequired(value);
        this.validateNullable(value);
        this.validateOneOf(value);
    }

    private validateRequired(value: any): void {
        if (this.conditions.required && value === undefined) throw new Error('invalid')
    }

    private validateNullable(value: any): void {
        if (!this.conditions.nullable && value === null) throw new Error('invalid: nullable=false but the value is null')
    }

    private validateOneOf(value: any): void {
        if (this.conditions.oneOf === undefined) return;
        if (!this.conditions.oneOf.includes(value)) throw new Error(`invalid: value is not included in ${this.conditions.oneOf}`)
    }
}

export interface Conditions {
    required: boolean
    nullable: boolean
    oneOf?: Array<any>
}

