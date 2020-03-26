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
      ref: "user",
    },
    // comments: [
    //   {
    //     comment: String,
    //     commentOwner: {
    //       type: Schema.Types.ObjectID,
    //       ref: "user",
    //     },
    //   },
    // ],
    dateEntryCreated: {
      type: Date,
      default: Date.now,
    },
  })
);
