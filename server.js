const express = require('express');
const app = express ();


app.listen (3000, () =>{
    console.log('Node API app is running')
})


mongoose.connect("mongodb+srv://NanaAkuaGayles:<password>@cluster0.vw5vkcp.mongodb.net/")
.then(() =>{
    console.log('connected to mongodb')

})
