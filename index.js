require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello World !")
})

app.get('/harshit',(req,res)=>{
    res.send("Response : Successfully request to harshit")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Successfully login!</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Your app is listen on localhost : ${process.env.PORT}`);
})