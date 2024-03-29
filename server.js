const express = require('express');

const app = express();
const mongoose=require("mongoose")
app.get('/',(req,res)=>{
    res.send("hi its working with home path");
})
/*mongoose.connect("mongodb+srv://bhatvikhyath31:#Athri787@vikhyath.rebxy4s.mongodb.net/user",{
useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)}
        else
{console.log("w")
}
}
    )*/
    const password = encodeURIComponent('%23Athri787');
    const connectionOptions = {
      
        
    };
    

    mongoose.connect("mongodb+srv://bhatvikhyath31:%23Athri787@vikhyath.rebxy4s.mongodb.net/user",connectionOptions)
    .then(() => {
        console.log('Connected to MongoDB');
        // Continue with the rest of your server setup
        app.listen(4000, () => {
            console.log('Server is running on port 4000');
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });

