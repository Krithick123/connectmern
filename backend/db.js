const mongoose= require('mongoose');
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/project',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("ERROR HAS BEEN OCCURRED",error);
    }
}

module.exports=connectDB;