const mongoose = require('mongoose');



const menuSchema = new mongoose.Schema({
    menuName:String,
});


module.exports = mongoose.model('Menu', menuSchema)