const Group = require('../models/Group')

module.exports = {
    async index(req,res){
        try{
            const {location,name} = req.query;
            const results = name && location  ? await Group.findAll({
            where:{
                name,
                location
            }
        }) : await Group.findAll()
                return res.json(results);
        }catch(error){
            return res.status(400).json({ error: error.message });
        }
    },
    async store(req,res){
        try{
            const {name,location,breeds,phone} = req.body;
            const locationExist = await Group.findOne({where: { location}})
            if(locationExist){
                throw Error("Location already registered")
            }
            const group = await Group.create({
                name,
                location,
                breeds,
                phone
            })
            return res.status(200).json(group)
        }catch(err){
            res.status(400).json({error:err.message})
        }
    },
    async update(req,res){
        const { id } = req.params;
        const { name,location,breeds,phone } = req.body;
        const data = {
            name,
            location,
            breeds,
            phone
        } 
        const groupFind = await Group.findByPk(id)
        if(!groupFind) {
            return res.json({error:"ID not found"})
        }
        await Group.update(data, {where: { id } } )
        return res.status(200).json({success:"Group updated"});
},   
}