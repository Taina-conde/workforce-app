import { dataDefault } from "./data";
const clone = require("clone");

let dataBase = {};

function getAll(key) {
  let data = dataBase[key];
  if (data == null) {
    data = dataBase[key] = clone(dataDefault);
  }
  return data;
}

function getByCpf(key, cpf) {
  return new Promise((res) => {
    let employees = getAll(key);
    let filteredEmployees = employees.filter(
      (employee) => employee.cpf === cpf
    );
    res(filteredEmployees)
  });
}
