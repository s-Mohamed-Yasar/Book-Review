import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/user.router.js";
import connectDb from "./db/db.connect.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/dist")));
connectDb();
app.use("/book/review", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
