import {Schema} from "../schemas/schema/Schema";

export interface Conditions {
    required: boolean
    nullable: boolean
    oneOf?: Array<any>
    notOneOf?: Array<any>
}

export interface StringConditions extends Conditions {
    length?: number
    min?: number
    max?: number
}

export interface NumberConditions extends Conditions {
    min?: number
    max?: number
    lessThan?: number
    moreThan?: number
}

export interface ObjectConditions<T extends object> extends Conditions {
    fields?: {
        [key in keyof T]: Schema<T[key]>
    };
}