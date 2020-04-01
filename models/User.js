const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
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
