const dataDefault = require("./data");
const clone = require("clone");

let dataBase = {};

function getData(token) {
  let data = dataBase[token];
  if (data == null) {
    data = dataBase[token] = clone(dataDefault);
  }
  return data.dataDefault;
}
function getAll(token) {
  return new Promise((res) => {
    const employees = getData(token);
    const filteredEmployees = employees.filter((employee) => !employee.deleted);
    res(filteredEmployees);
  });
}

function getBy(token, criterioBusca, query) {
  return new Promise((res) => {
    let employees = getData(token);
    const filteredEmployees = employees.filter(
      (employee) => employee[criterioBusca] === query && !employee.deleted
    );
    
    res(filteredEmployees);
  });
}


function save(token, newEmployee) {
  return new Promise((res) => {
    let employees = getData(token);
console.log("new employee", newEmployee)
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === newEmployee.cpf
    );
    const employeeExists = employeeInDataBaseArr.length !== 0;
    const employeeInDataBase = employeeInDataBaseArr[0];
        console.log("employeeindatbase", employeeInDataBase)
    if (employeeExists) {
      for (prop in newEmployee) {
        employeeInDataBase[prop] = newEmployee[prop];
      }
      return res(employeeInDataBase);
    }
    console.log("aqui dentro")
    employees.push(newEmployee);
    res(newEmployee);
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
    console.log("employee in deleted", employeeInDataBase)
    res(employeeInDataBase);
  });
}
module.exports = {
  getAll,
  getBy,
  save,
  disable,
};
