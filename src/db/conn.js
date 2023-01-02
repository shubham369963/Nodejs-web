const mongoose = require("mongoose");

const DB = process.env.MONGODB_KEY;


mongoose.connect( DB || "mongodb://localhost:27017/upcodedatabase" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () =>{
    console.log("connection successful");
}).catch( (err) =>{
    console.log("err");
});