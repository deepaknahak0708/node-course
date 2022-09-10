require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
require('./config/db')

app.use(express.json({limit:'10mb'}));           //middleware
app.use(express.urlencoded({extended:false, limit:'10mb'}));

app.use('/api',router);

app.listen(port, () => {
    console.log(`server successfully started at port ${port}`);
});