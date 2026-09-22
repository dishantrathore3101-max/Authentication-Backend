const express=require('express');
const userRoutes = require('./routes/user.routes')
const app=express();
const routesNewPost=require('./routes/newPost.routes')
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json())

app.use('/', userRoutes)
app.use('/post', routesNewPost);



 



module.exports=app
