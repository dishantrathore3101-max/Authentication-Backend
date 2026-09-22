const app=require('./src/server');
const connectDb=require('./db/db');

connectDb();


app.listen(2001,
    console.log('serveris running')
    
)