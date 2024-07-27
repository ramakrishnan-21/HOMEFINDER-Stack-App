import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import testRoute from './routes/test.route.js';
import userRoute from './routes/user.route.js';
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // to allow client side requests with cookies or auth headers
app.use(express.json());
app.use(cookieParser());

app.use("/api/post",postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);


app.listen(3000,(req,res)=>{
    console.log("Server works");
});