const mongoose = require('mongoose');



const parentSchema = new mongoose.Schema({

	menu_id:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Menu'
	},
    parentMenu:String,
   

});

module.exports = mongoose.model('ParentMenu',parentSchema)