const express = require('express')
const app = express();


app.use(express.static('FrontEnd'));
 

app.listen(process.env.PORT || 3800, ()=>{
    console.log('server corriendo')
})