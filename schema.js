const ALPHA_NUM_KEY = "^\w+$";

const entityTypes = {
    type: "object",
    patternProperties: {
        ALPHA_NUM_KEY: {
            type: "object",
            properties: {
                shape: {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            pattern: "Record"
                        },
                        attributes: {
                            type: "object",
                            patternProperties: {
                                ALPHA_NUM_KEY: { type: "object" }
                            }
                        }
                    }
                },
                memberOfTypes: { type: "array" }, // TODO: must be entity types defined in the schema
            }
        }
    }
};

const actions = { type: "array" };

const commonTypes = { type: "array" };

const namespace = {
    type: "object",
    properties: {
        entityTypes,
        actions,
        commonTypes
    },
    required: ["entityTypes", "actions"]
};

const schema = {
    type: "object",
    patternProperties: {
        "^[(::)\\w]*$": namespace
    },
    additionalProperties: false
};

module.exports = {
    default: schema
}