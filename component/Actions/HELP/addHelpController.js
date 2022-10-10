const { cloudinary } = require("../../../configs/cloudinary");
const { helpModel } = require("../../../model/Actions/HELP/helpModel");

const addHelpController =  (req, res) => {
  // console.log(req.body);
  let {fileDetails,help_title,help_desc}=req.body;
  cloudinary.v2.uploader.upload(fileDetails,{resource_type  :"video"},
    function(error, result) {
     if (error) {
      res.send({message:"Check your Network!!!",status:false})
     }else{
      let video_public_id=result.public_id ;  
      let help_video_url=result.secure_url;
      console.log(video_public_id)
      const resourcesDetails={help_title,help_desc,help_video_url,video_public_id}
      let helpResources= new helpModel(resourcesDetails)
      helpResources.save((err,result)=>{
        if (err) {
      res.send({message:"Internal server Error",status:false})
          
        }else{
         res.send({message:"Help Resources uploaded successfully!!!",status:true})
        }
      })
     }
  });


  // const helpDetails = new helpModel(req.body);
  // helpDetails.save((err, result) => {
  //   if (err) {
  //     res.send({ message: "Internal server error", status: false });
  //   } else {
  //     res.send({ message: "Help added successful", status: true });
  //   }
  // });
};

module.exports = { addHelpController };
