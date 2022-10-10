const { userDetailsModel } = require("../../model/user/userDetailsModel")

const manageUserController=(req,res)=>{
    console.log(req.body)
    userDetailsModel.find((err,result)=>{
        if (err) {
            res.send({message:"Internal error",status:false})
        }else{
            res.send({message:"Showing users details",status:true,result})
        }
    })

}

module.exports={manageUserController}