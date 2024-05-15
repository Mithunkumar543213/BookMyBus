// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://mithunkumaryaduvansy123:mi123thun@mithun.gqx4dyl.mongodb.net/travels "

  );
};

module.exports = connect;


