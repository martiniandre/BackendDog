const Dog = require('../models/Dog')

module.exports = {
    async index(req,res){
        try{
            const { name } = req.query;
            const results = name  ? await Dog.findAll({
            where:{
                name
            }
        }) : await Dog.findAll()
                return res.json(results);
        }catch(error){
            return res.status(400).json({ error: error.message });
        }
    },
    async store(req,res){
        try{
            const { name,breed,age,location} = req.body;
            const dog = await Dog.create({
                name,
                breed,
                age,
                location
            })
            console.log(dog)
            return res.json(dog)
        }catch(error){
            return res.status(400).json({ error: error });
        }
        
    },
    async update(req,res){
            const { id } = req.params;
            const { name,breed,age,location} = req.body;
            const data = {
                name,
                breed,
                age,
                location
            } 
            const dogFind = await Dog.findByPk(id)
            if(!dogFind) {
                return res.json({error:"ID not found"})
            }
            await Dog.update(data, {where: { id } } )
            return res.status(200).json({success:"Dog updated"});
    },   
    async delete(req,res){
        const { id } = req.params;
        const dogFind = await Dog.findByPk(id)
        console.log(dogFind)
        if(!dogFind) {
            return res.json({error:"ID not found"})
        }
        Dog.destroy({
            where: { id }
        })
        return res.status(200).json();   
    }
}