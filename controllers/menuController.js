const menu = require('../models/Menumodel')

module.exports = {
	create: async(req,res)=>{
		const {menuName} = req.body;
		const Menu = await menu.create({
			menuName
		})
		return res.send(Menu)
	}
}