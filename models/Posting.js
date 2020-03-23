const { model, Schema } = require("mongoose");

module.exports = model(
    "posting",
    new Schema({
        entry: {
            type: String,
            required: true,
        },
    })
);
