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

export interface ObjectConditions extends Conditions{

}