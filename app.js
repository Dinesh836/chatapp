const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/msg" method="POST"><input id="username" type="text" name="username"><button type="submit">add</button></form>')
})

app.use('/msg',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`msg`, document.getElementById(`msg`).value)" action="/save" method="POST"><input id="msg" type="text" name="message"><button type="submit">SEND</button></form>')
})

// app.use('/save',(req,res,next)=>{
   
    
//     res.redirect('/msg');
// })


app.listen(3000);