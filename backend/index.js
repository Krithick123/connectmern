const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const connectDB=require('./db')
const userRouter=require('./routes/userRoute')
const app=express();
const PORT=8000;
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use('/api/users',userRouter);
app.listen(PORT,()=>{
    console.log(`server is started at ${PORT} port`);
})