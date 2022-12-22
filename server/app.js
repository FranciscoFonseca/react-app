const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/items/:title", (req, res) => {
  // Make an HTTP GET request to the third-party API
  request(
    `https://api.publicapis.org/entries?title=${req.params.title}`,
    (error, response, body) => {
      if (error) {
        res.status(500).send("An error occurred");
      } else {
        // Send the data back to the client
        res.send(body);
      }
    }
  );
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
