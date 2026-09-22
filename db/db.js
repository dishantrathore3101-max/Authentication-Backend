const mongoose=require('mongoose');

const connectDb=async ()=>{
    try{
        await mongoose.connect('mongodb+srv://dishantrathore3101_db_user:JJRdCNOG44LYUqwB@dishhh.erhkakw.mongodb.net/kawa');
        console.log('db is connected');

        
    }
    catch(error){
        console.log('error.message');
        

    }
    
}
module.exports=connectDb;