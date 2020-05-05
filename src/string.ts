export const string = (): Schema => {
    return {type: 'string'}
};

interface Schema {
    type: string
}

export const validate = (schema: Schema, value: any) => {
    if (schema.type === 'string') {
        if (typeof value !== "string") {
            throw new Error('type of value is not string')
        }
    }
    return value
};