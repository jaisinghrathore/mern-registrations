const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

mongoose.connect("mongodb+srv://mayank:9772667600@cluster0.towwl.mongodb.net/mytable?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true 
 },()=>console.log("db connected"));

 