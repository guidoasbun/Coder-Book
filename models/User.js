const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
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
});

//brings in plugin tool
UserSchema.plugin(require("passport-local-mongoose"));

module.exports = model("user", UserSchema);
