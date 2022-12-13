const express = require ('express');
const mongoose = require ('mongoose');
const route = require('./Route/route')

const app = express();
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://vikram2211:niI4v8Tkxl2drjiN@cluster0.iufwb.mongodb.net/online-exam",{
 useNewUrlParser : true
})
.then(() =>{
    console.log("MongoDB is connected")
})
.catch((err) =>{
    console.log(err)
})

app.use('/',route)

app.listen(process.env.PORT || 3000, () =>{
    console.log("Server running on port" , (process.env.PORT || 3000))
}) ;