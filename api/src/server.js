import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";
//
const app = express();
const PORT = 3001 || process.env.PORT;

// db connections
import { url } from "./connection/index.js";

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      throw error;
    }
    console.log("Connected to mongoDB");
  }
);

mongoose.connection.once("open", (error) => {
  if (error) {
    throw error;
  }
  console.log("Connection open");
});

// ------
app.use(cors({}));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
