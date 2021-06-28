const express = require("express");
const cors = require("cors");
const employees = require("./employees");

const app = express();

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  const key = req.get("Authorization");

  if (key) {
    req.key = key;
    next();
  } else {
    res.status(403).send({
      error:
        "Please, provide an Authorization header to identify yourself (can be whatever you want)",
    });
  }
});

app.get('/employees', (req, res) => {
    employees.getAll(req.key)
    .then(
        (data) => res.send(data),
        (error) => {
            console.log(error);
            res.status(500).send({
                error: "There was an error."
            })
        }
    )
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
