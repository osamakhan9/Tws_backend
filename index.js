const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://okosama06:okosama06@cluster0.hqzbmto.mongodb.net/?retryWrites=true&w=majority')
app.use(require('./routes/route'))

app.listen(8080, ()=>{
    
    console.log(`listen at http://localhost:${PORT}`);
})