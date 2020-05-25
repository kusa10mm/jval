import {baseValidate} from "../../validator/baseValidate";
import {Conditions} from "../../types/conditions";

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
        baseValidate(value, this.conditions);
        return value;
    }
}

