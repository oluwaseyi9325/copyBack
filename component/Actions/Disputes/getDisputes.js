const { DisputeModel } = require("../../../model/Actions/DISPUTES/disputeModel");

const getDisputeController=(req,res)=>{
     console.log(req.body);

     DisputeModel.find((err,result)=>{
        if (err) {
           res.send({message:"Internal error!!!",status:false}) 
        }else{
            res.status(200).send({message:"Showing disputes list",status:true,result})
        }
     })
}

module.exports={getDisputeController}