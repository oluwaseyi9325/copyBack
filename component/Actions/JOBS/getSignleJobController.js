const { jobModel } = require("../../../model/Actions/JOBS/JobsModel");


const getSignleJobController=(req,res)=> {
 
      console.log(req.query)
    const  {job_title,job_id}=req.query;

     jobModel.findOne({job_title:job_title,_id:job_id},(err,result)=>{
        if (err) {
            res.send({message:"Internal server error",status:false})
        }else{
            if (result) {
               res.send({message:"Job fillted",status:true,result}) 
            }else{
            res.send({message:"can't get job filterd",status:false})

            }
        }
     })

 
}
 module.exports={getSignleJobController}
