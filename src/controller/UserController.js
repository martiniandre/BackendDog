const User = require('../models/User')

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
                throw Error("Email already exist")
            }
            const user = await User.create({
                name,
                email,
                password,
                location
            })
            return res.json(user)
        }catch(error){
            return res.status(400).json({ error: "Oi" });
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