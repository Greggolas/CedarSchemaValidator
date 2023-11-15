const ALPHA_NUM_KEY = "^\w+$";

//Set|Extension"

const basicAttributeTypes = {
    enum: [ "String", "Long", "Boolean" ]
};

const entityEttribute = {
    type: "object",
    properties: {
        name: {
            type: "string" // TODO: The entity type must be defined in the schema.
        }
    }
};

const setAttribute = {
    type: "object",
    properties: {
        element: {
            oneOf: [
                basicAttributeTypes,
                { $ref: "record" }
            ]
        }
    }
};

const attribute = {
    type: "object",
    properties: {
        type: {
            oneOf: [
                basicAttributeTypes,
                { $ref: "record" }
            ]
        }
    }
};

const record = {
    $id: "record",
    type: "object",
    properties: {
        type: { enum: [ "Record" ] },
        attributes: {
            type: "object",
            patternProperties: {
                [ALPHA_NUM_KEY]: attribute
            }
        }
    }
};

const entityTypes = {
    type: "object",
    patternProperties: {
        [ALPHA_NUM_KEY]: {
            type: "object",
            properties: {
                shape: record,
                memberOfTypes: { type: "array" }, // TODO: must be entity types defined in the schema, If the parent type is part of the same namespace as the child type, then you can reference simply the parent type’s name. If the parent type is in a different namespace than the child type, then you must include the parent type’s namespace as part of the reference.
            }
        }
    }
};