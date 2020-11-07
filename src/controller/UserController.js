const User = require('../models/User')
const authConfig = require('../config/auth.json')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    async index(req,res){
        try{
            const {name} = req.query;
            const results = name  ? await User.findAll({
            where:{
                name
            }
        }) : await User.findAll()
                return res.json(results);
        }catch(error){
            return res.status(400).json({ error: error.message });
        }
    },
    async store(req,res){
        try{
            const { name,email,password,location} = req.body;
            const emailExist = await User.findOne({where : { email }})
            console.log(emailExist)
            if(emailExist){
                return res.json({error: "Email already registered"})
            }
            const hashedPassword = await bcrypt.hash(password,3);
            console.log(hashedPassword)
            const user = await User.create({
                name,
                email,
                hash_pass: hashedPassword,
                location
            })
            const token = jwt.sign({ id: user.id}, authConfig.secret,{
                expiresIn:21600, 
            })
            return res.json({user,token})
        }catch(error){
            return res.status(400).json({ error: error });
        }
        
    },
    async update(req,res){
            const { id } = req.params;
            const { name,email,password,location } = req.body;
            const data = {
                name,
                email,
                password,
                location
            } 
            const userFind = await User.findByPk(id)
            if(!userFind) {
                return res.json({error:"ID not found"})
            }
            await User.update(data, {where: { id } } )
            return res.status(200).json({success:"User updated"});
    },

   /*  async delete(req,res){
        const { id } = req.params;
        const userFind = await User.findByPk(id)
        console.log(userFind)
        if(!userFind) {
            return res.json({error:"ID not found"})
        }
        User.destroy({
            where: { id }
        })
        return res.status(200).json();   
    } */
}