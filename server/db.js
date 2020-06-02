const mongoose = require("mongoose");
const url =
  "mongodb+srv://<username>:<password>@cluster0-gbbzc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true, useFindAndModify: false}).then(
  async (res) => {
    console.log("mongodb connected succesfully");
  },
  (err) => {
    console.log("error in connection");
  }
);
