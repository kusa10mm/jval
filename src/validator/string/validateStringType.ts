export const validateStringType = (value: any): void => {{
    if (typeof value !== "string" && typeof value !== "undefined") throw new Error('invalid');
}};