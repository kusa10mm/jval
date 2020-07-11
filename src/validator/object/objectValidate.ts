import {ObjectConditions} from "../../types/conditions";
import {Schema} from "../../schemas/schema/Schema";

export const objectValidate = async <T extends object>(obj: object, conditions: ObjectConditions<T>): Promise<undefined> => {
    if (!conditions.fields) return;

    for( const [fieldKey, fieldValue] of Object.entries(conditions.fields)) {
        if (!(fieldValue instanceof Schema)) {
            throw new Error('validation failure')
        }

        let keyFound: boolean = false;
        for( const [key, value] of Object.entries(obj) ) {
            if (fieldKey === key) {
                await fieldValue.validate(value);
                keyFound = true;
                break;
            }
        }
        if (keyFound) continue;
        if (fieldValue["conditions"].required) throw new Error(`required field ${fieldKey} is not found.`);
    }
};