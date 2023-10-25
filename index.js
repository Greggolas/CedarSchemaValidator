const { default: Ajv } = require("ajv");
const { default: schema } = require("./schema");

const input = {
    "asdf::fdsa": {
        entityTypes: {},
        actions: []
    }
};

// for each namespace...

    // get all entityTypes

    // traverse memberOfTypes to validate entries are in valid entities (can be from another namespace, which will include namespace::entityName)

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(input);
if (!valid) console.log(validate.errors);
