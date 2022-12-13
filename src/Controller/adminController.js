const adminModel = require("../Models/adminModel")
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")

const createAdmin = async (req, res) => {
    try {
        const data = req.body
        console.log(req.body)
        let { name, email, password, cPassword } = data
        if (Object.keys(data).length == 0) return res.status(400).send({ msg: "All fields arr mandatory" })
        data.password = password
        // let salt = await bycrypt.genSalt(10)
        // password = awaitb
        let salt = await bcrypt.genSalt(10)
         data.password = await bcrypt.hash(password,salt)
         data.cPassword = await bcrypt.hash(password,salt)
        const adminCreated = await adminModel.create(data)
        return res.status(201).send({ status: true, msg: "Data uploaded successfully", data: adminCreated })
    } catch (error) {
        return res.status(500).send(error.message)

    }
}


const adminLogin = async(req,res) =>{
    let data = req.body
    let {email,password} = data
    let validatingEmail = await adminModel.findOne({email:email})
    if(!validatingEmail)return res.status(404).send({msg:"user dose not exit"})
    let decPass= await bcrypt.compare(password,validatingEmail.password)
    if(!decPass) return res.status(400).send({msg:"paswword dosen't match"})
    let token = jwt.sign(
        {
          adminId:validatingEmail._id
        },
        "onlineExam"
    )
    res.status(200).send({msg:"loggedIn successfully",token:token,id:validatingEmail._id})
}
module.exports = { createAdmin,adminLogin }