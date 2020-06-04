export interface Conditions {
    required: boolean
    nullable: boolean
    oneOf?: Array<any>
}

export interface StringConditions extends Conditions{
    length?: number
    min?: number
    max?: number
}