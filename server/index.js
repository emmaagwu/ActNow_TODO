const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({msg: "Hello World!"});
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});