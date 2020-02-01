const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.json());
app.use((request,response,next)=>{
  request.myProperty = 'YES';
  next();
});

app.get("/", (request, response) => {
  // response.sendFile(path.join(__dirname,'static','index.html'));
  console.log(request.myProperty);
  response.send("MiddleWare");
});

app.listen(3005);
