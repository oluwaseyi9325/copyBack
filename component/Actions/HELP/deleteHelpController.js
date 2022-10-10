const { cloudinary } = require("../../../configs/cloudinary");
const { helpModel } = require("../../../model/Actions/HELP/helpModel");

const deleteHelpController = (req, res) => {
  console.log(req.body);
  const {deleteIndex}=req.body

 
    helpModel.findOneAndDelete({ video_public_id: deleteIndex }, (err, result) => {
      if (err) {
        res.send({ message: "Internal server error", status: false });
      } else {
        cloudinary.v2.uploader.destroy(deleteIndex, {resource_type:"video"}).then((err,result)=>{
          if (result) {
            res.send({ message: "Help resources deleted!", status: true });
          }
        })
       

      }
    });
   

 
  
};

module.exports = { deleteHelpController };
