const { model, Schema } = require("mongoose");

module.exports = model(
  "posting",
  new Schema({
    entryTitle: {
      type: String,
      required: true
    },

      entry: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectID,
      ref: "user",
    },
    dateEntryCreated: {
      type: Date,
      default: Date.now,
    },
  })
);
