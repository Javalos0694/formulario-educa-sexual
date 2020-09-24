const express = require('express')
const app = express();
const http = require('http');

const server = http.createServer(app);

app.use(express.static('FrontEnd'));
 

server.listen(process.env.PORT || 3800, ()=>{
    console.log('server corriendo')
})