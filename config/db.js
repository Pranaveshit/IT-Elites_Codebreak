const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("DB connected");
    })
    .catch((err)=>console.log(err));


