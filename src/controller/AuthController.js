const User = require('../models/User')
const authConfig = require('../config/auth.json')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports = {
    async auth(req,res){
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email});

            if(user.email != email || !await bcrypt.compare(password ,user.hash_pass)){
                return res.status(400).send("Email or password incorrect")
            }
            user.hash_pass = undefined

            const token = jwt.sign({ id: user.id}, authConfig.secret,{
                expiresIn:21600, 
            })

            return res.status(400).json({user,token})
        }catch(error){
              return res.json({error: error})      
        }
    }

}