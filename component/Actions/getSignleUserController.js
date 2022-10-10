const { userDetailsModel } = require("../../model/user/userDetailsModel");

const getSignleUserController = (req, res) => {
  console.log(req.query);

  const { full_name, user_id } = req.query;

  if (full_name && user_id) {
    userDetailsModel.findOne(
      { full_name: full_name, _id: user_id },
      (err, result) => {
        if (err) {
          res.send({ message: "Internal server error", status: false });
        } else {
          if (result) {
            res.send({ message: "Job fillted", status: true, result });
          } else {
            res.send({ message: "can't get job filterd", status: false });
          }
        }
      }
    );
  } else {
    res.send({ message: "Bad enteries" });
  }
};

module.exports = { getSignleUserController };
