import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import colors from "colors"
import productRoutes from "./routes/productRoutes.js"
import {
  notFound,
  errorHandler
} from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"



dotenv.config()

connectDB()

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.send("API is running.....")
})


app.use("/api/products", productRoutes)
//The app.use() function is used to mount the specified middleware function(s) at the path which is specified
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.use(notFound)
app.use(errorHandler)





const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
//server is runing in developemt mode in port 5000