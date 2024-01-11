import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    //corsOptions object for cors config
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); //use method is used for middleware generally
app.use(express.json({ limit: "16kb" })); //limiting our json size thats coming so server don't crash
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //when data in comming from url
app.use(express.static("public")); //creates public asset to use them
app.use(cookieParser());
export { app };
