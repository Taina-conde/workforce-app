const dataDefault = require('./data');
const clone = require("clone");

let dataBase = {};

function getData(token) {
  let data = dataBase[token];
  if (data == null) {
    data = dataBase[token] = clone(dataDefault);
  }
  return data;
}

function getBy(token, criterioBusca, query) {
  return new Promise((res) => {
    let employees = getData(token);
    let filteredEmployees = employees.filter(
      (employee) => employee[criterioBusca] === query
    );
    res(filteredEmployees);
  });
}
function formatEmployee(employee) {
  return {
    DataCad: Date.now().toString("MM/dd/yy"),
    Cargo: employee.cargo,
    Cpf: employee.cpf,
    Nome: employee.nome,
    UfNasc: employee.uf.toUpperCase(),
    Salario: Number(employee.salario),
    Status: employee.status.toUpperCase(),
    deleted: false,
  };
}

function save(token, newEmployee) {
  return new Promise((res) => {
    let employees = getData(token);
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === newEmployee.cpf
    );
    const employeeExists = employeeInDataBaseArr.length !== 0;
    const employeeInDataBase = employeeInDataBaseArr[0];

    if (employeeExists) {
      for (prop in newEmployee) {
        employeeInDataBase[prop] = newEmployee[prop];
      }
      return res(employeeInDataBase);
    }
    employees.concat(formatEmployee(newEmployee));
  });
}
function disable(token, cpf) {
  return new Promise((res) => {
    let employees = getData(token);
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === cpf
    );
    const employeeInDataBase = employeeInDataBaseArr[0];
    employeeInDataBase.deleted = true;
    res(employeeInDataBase);
  });
}
module.exports = {
    getAll,
    getBy,
    save,
    disable,
  };
