const { model, Schema } = require("mongoose");

module.exports = model(
    "posting",
    new Schema({
        entry: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectID,
            ref: 'user'
        },
        response: {
            type: Schema.Types.ObjectID,
            ref: 'user'
        }
    })
);
