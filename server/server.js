import express from "express";
import cors from "cors";
const app = express();

const JOKES = "This is a joke.";

app.use(express.json());
// app.use(cors());

app.get("/getjokes", (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173").status(200).json({
  //     joke: JOKES,
  //   });
  res.status(200).json({
    joke: JOKES,
  });
});

app.listen(3000, () => console.log("Server on at port 3000."));
