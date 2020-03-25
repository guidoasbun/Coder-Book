const { model, Schema } = require("mongoose");

module.exports = model(
  "User",
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
    postings: [
      {
        type: Schema.Types.ObjectID,
        ref: "posting",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectID,
        ref: "posting",
      },
    ],
  })
);
