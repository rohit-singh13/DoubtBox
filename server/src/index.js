import "dotenv/config";
import { connectDB } from "./config/db.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT||5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status:"OK"});
})

const start = async() => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    });
};

start();