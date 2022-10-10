const { helpModel } = require("../../../model/Actions/HELP/helpModel");

const editHelpController = (req, res) => {
  console.log(req.body);
  const { help_title, help_desc, editIndex} = req.body;
  helpModel.findOneAndUpdate(
    { _id: editIndex },
    {
      help_title,
      help_desc,
      
    },
    (err, result) => {
      if (err) {
        res.send({ message: "Internal server error", status: false });
      } else {
        res.send({ message: "Help resources edited!", status: true });
      }
    }
  );
};

module.exports = { editHelpController };
