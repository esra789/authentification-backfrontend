const users=require("../model/model")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
exports.register=async(req,res)=>{
    const{name,email,password}=req.body
    console.log(req.body)
    try {
        const user = await users.findOne({email})
        if ( user){
            res.status(400).send({errors:[{ msg:"user exist"}]})
        } 
        else {
            const NewUser =new users(req.body)
            const salt=10
            const hashpassword=bcrypt.hashSync(password,salt) 
            NewUser.password=hashpassword
            const secretkey="azerty"
            const token=jwt.sign({id:NewUser._id},secretkey)
            await NewUser.save()
            res.status(200).send({msg:"registration has done successfuly",NewUser,token})
        }

    } catch (error) {
        res.status(500).send({msg:"registration failed",error})
    }
}
exports.login=async (req,res)=>{
    const{email,password}=req.body

    try {
        const user=await users.findOne({email})
        if(!user){
            res.status(400).send({errors:[{ msg:"email not found you need to register"}]})
        }
        else{
            const compare=bcrypt.compareSync(password,user.password)
            if (!compare){
                res.status(400).send({errors:[{msg:"wrong password"}]})
            }
            else{
                const secretkey="azerty"
                const token=jwt.sign({id:user._id},secretkey)
                res.status(200).send({msg:"login successfully",user,token})
            }
        }
    } catch (error) {
        res.status(500).send({msg:"login faild",error})
    }
}
exports.getcurrent=(req,res)=>{
    res.status(200).send({user:req.user})
}