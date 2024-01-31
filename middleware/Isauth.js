const jwt=require('jsonwebtoken');
const users=require('../model/model');
exports.isauth=async(req,res,next)=>{
    const token=req.header('token');
    try {
        const sercretkey="azerty"
        const verify=jwt.verify(token,sercretkey);
        console.log(verify)
        if(!verify){
         res.status(400).send({msg:'you are not authorized'})
        }
        const user=await users.findById(verify.id)
        req.user=user
        next()
    } catch (error) {
        res.status(500).send({msg:'invalid token',error})
    }
}