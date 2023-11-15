const { actions } = require("./actions");
const { entityTypes } = require("./entityTypes");
const { commonTypes } = require("./commonTypes");

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
    $id: "http://localhost/schema",
    type: "object",
    patternProperties: {
        "^[(::)\\w]*$": namespace
    },
    additionalProperties: false
};

module.exports = {
    default: schema
}