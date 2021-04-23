const express = require("express");
const bodyParser = require("body-parser")
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer/lib/smtp-transport");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
  resizeBy.send('welcome to my form')
})
app.post('/api/forma',(req,res)=>{
  let data=req.body;
  let smtpTransport = nodemailer.createTransport({
    service:"Gmail",
    port:465,
    auth: {
      user: "ernesthuku@gmail.com",
      pass: "Brownse10",
    }

  });


let mailOptions = {
  from:data.useremail,
  to:"ernesthuku@gmail.com",
  subject:`Message from $(data.username)`,
  html:`
    <h3>Information</h3>
    <ul>
    <li>Userame: ${data.username}</li>  
    <li>Email: ${data.useremail}</li> 
    
    </ul>
    
    <h3>Message</h3>
    <p>${data.usermessage}</p>
  `
};
 smtpTransport.sendMail(mailOptions, (error,response)=>{
   if(error){
     res.send(error)
   }
   else{
     res.send('success')
   }
 })


 smtpTransport.close()
})


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
  console.log(`server starting at port ${PORT}`);
})