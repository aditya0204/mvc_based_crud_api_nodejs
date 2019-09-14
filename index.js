const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const user = require('./app/models/user');





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',require('./api/user'));

app.get("/",(req,res)=>res.render("index.ejs"));

const PORT = 5000||process.env.PORT;

app.listen(PORT,()=>{
   console.log("Server started at server "+PORT);
})
