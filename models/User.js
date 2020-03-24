const { model, Schema } = require("mongoose");

module.exports = model(
  "user",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateAccountCreated: {
      type: Date,
      default: Date.now,
    },
    items: [
      {
        type: Schema.Types.ObjectID,
        ref: "posting",
      },
    ],
  })
);
