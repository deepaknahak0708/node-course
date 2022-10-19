require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000;
const router = require('./routes/index');
require('./config/db')
const adminSeed = require('./seeder/seed')

app.use(express.json({limit:'10mb'}));           //middleware
app.use(express.urlencoded({extended:false, limit:'10mb'}));

app.use('/api',router);

adminSeed()
// app.use((req,res,next)=>{

// })
app.listen(port, () => {
    console.log(`server successfully started at port ${port}`);
});
