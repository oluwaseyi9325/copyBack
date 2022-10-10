const mongoose = require("mongoose");
const bcypt = require("bcryptjs");

const adminDetailsSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  security_quest:{ type: String, required: true, trim: true }
});

let sailRound = 10;
adminDetailsSchema.pre("save", function (next) {
  bcypt.hash(this.password, sailRound, (err, hashedPaaword) => {
    if (err) {
      console.log("error");
    } else {
      // console.log(hashedPaaword)
      this.password = hashedPaaword;
      next();
    }
  });
});

adminDetailsSchema.methods.validatePassword = function (password, callback) {
  console.log(this.password);

  bcypt.compare(password, this.password, (err, same) => {
    if (!err) {
      callback(err, same);
    } else {
      next();
    }
  });
};

let adminDetailsModel = mongoose.model("admin_details_model", userDetailsSchema);

module.exports = { adminDetailsModel };
