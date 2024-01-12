const parent = require('../models/ParentMenumodel')

module.exports ={
	create: async(req,res)=>{
		const Parent = await parent.create({
            menu_id:req.body.menu_id,
			parentMenu:req.body.parentMenu
		})
		const parnetData = await Parent.save();

		return res.send(parnetData)
	},

	parentAllData: async(req,res)=>{
		// const parnetData = await parent.find({
		// 	_id:req.body.menu_id
		// })
		// res.send(parnetData)
		try{
			let data = await parent.find().populate({
				path:'menu_id'
			})
			res.send(data)
	
		} catch(e){
			res.send(e.massage)
		}
	}
}