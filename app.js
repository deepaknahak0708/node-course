const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');

app.use(express.json());           //middleware
app.use(express.urlencoded({extended:false}));

app.use('/api',router);

app.listen(port, () => {
    console.log(`server successfully started at port ${port}`);
});