import express from "express";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello from Sujas!");
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
