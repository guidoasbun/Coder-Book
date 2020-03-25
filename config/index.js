module.exports = require("mongoose").connect(
  "mongodb://localhost/coderbookdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  }
);
