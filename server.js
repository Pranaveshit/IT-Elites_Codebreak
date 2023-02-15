//mongodb accsses
require("./config/db")
const app=require('express')();
const port=3000;
const UserRouter=require('./api/User');
//for accepting data(post)
const bodyPraser=require("express").json;
app.use(bodyPraser());
app.use('/user',UserRouter) 
app.listen(port,()=>{
    console.log('serever is running on port '+port);
})