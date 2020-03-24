const { model, Schema } = require("mongoose");

module.exports = model(
  "comment",
  new Schema({
    comment: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectID,
      ref: "user",
      required: true,
    },
    originalPost: {
      type: Schema.Types.ObjectID,
      ref: "posting",
      required: true,
    },
    dateEntryCreated: {
      type: Date,
      default: Date.now,
    },
  })
);
