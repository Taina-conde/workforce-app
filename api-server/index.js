require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const employees = require("./employees");
const config = require("./config");

const app = express();

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  const help = `
  <pre>
    Bem-vindo à WorkForce API

    Use uma Authorization header para trabalhar com seus próprios dados:
    Exemplo:
    fetch(url, { headers: { 'Authorization': 'your string' }})
 </pre>
  `;

  res.send(help);
});

app.use((req, res, next) => {
  const token = req.get("Authorization");

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error:
        "Please, provide an Authorization header to identify yourself (can be whatever you want)",
    });
  }
});

app.get("/employees", (req, res) => {
  employees.getAll(req.token).then(
    (data) => res.send(data),
    (error) => {
      console.log(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});
app.get("/employees/:cpf", (req, res) => {
  employees.get(req.token).then(
    (data) => res.send(data),
    (error) => {
      console.log(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});
app.get("/employees/:criterioBusca/:query", (req, res) => {
  console.log("req", req);
  employees.getBy(req.token, req.params.criterioBusca, req.params.query).then(
    (data) => res.send(data),
    (error) => {
      console.log(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});
app.post("/employees", bodyParser.json(), (req, res) => {
  employees.save(req.token, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.put("/employees/:cpf", bodyParser.json(), (req, res) => {
  employees.edit(req.token, req.params.cpf, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});
app.delete("/employees/:cpf", (req, res) => {
  employees.disable(req.token, req.params.cpf).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}, Ctrl + C to stop`)
);
