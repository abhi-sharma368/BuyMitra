import express from "express";
import cors from "cors";

// For the support of .env file
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors()); // By using this we can access out backend with any ip.

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Creating Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
