import express from "express";
import type {Request,Response} from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
import userRoutes from "./src/routes/userRoutes";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
// app.use("/users",userRoutes);
app.use(cookieParser());
app.use(express.json());

console.log("Backend logging middleware enabled");
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`Backend request: ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
    });
    next();
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));

// Connect Database
connectDB();

app.get("/",(req: Request, res:Response)=>{
    console.log("Root route hit");
    res.send("Backend is Running ");

});

app.get("/ping", (req: Request, res: Response) => {
    console.log("Ping route hit");
    res.status(200).json({ success: true, message: "pong" });
});

// app.use("/users",userRoutes);

app.use("/auth",authRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});


