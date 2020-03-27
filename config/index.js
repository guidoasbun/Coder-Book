module.exports = require("mongoose").connect(
  "mongodb://localhost/coderbookdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
