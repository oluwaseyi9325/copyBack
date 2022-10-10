const {
  DisputeModel,
} = require("../../../model/Actions/DISPUTES/disputeModel");

const deleteDisputesController = (req, res) => {
    console.log(req.body)
  const { delDisputeIndex } = req.body;

  DisputeModel.findOneAndDelete({ _id: delDisputeIndex }, (err, result) => {
    if (err) {
      res.send({ message: "Network error!!", status: false });
    } else {
      res.send({ message: "Dispute deleted", status: true });
    }
  });
};

module.exports = { deleteDisputesController };
