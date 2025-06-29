import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const connectDB=async()=>{
try{
 const conn=await mongoose.connect(process.env.MONGO_URI) 

 console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
}catch(error){
  console.error(`Error: ${error.message}`.red.underline.bold)
  process.exit(1) // means it will exit with failure 
}
}

export default connectDB