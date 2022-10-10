const { helpModel } = require("../../../model/Actions/HELP/helpModel");

const getHelpController = (req, res) => {
  helpModel.find((err, result) => {  
    if (err) {
      res.send({ message: "Internal server error", status: false });
    } else {
      if (!result) {
        res.send({ message: "Help resources is not available", status: false });
      } else {
        res.send({ message: "Showing help resources", status: true, result });
      }
    }
  });
};

module.exports = { getHelpController };
