const dataDefault = require("./data");
const clone = require("clone");

let dataBase = {};

function getData(token, dependencias = { db : dataBase }) {
    const { db } = dependencias;
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(dataDefault);
  }
  return data;
}
function getAll(token, dependencias = {_getData: getData}) {
  const { _getData } = dependencias;
  return new Promise((res) => {
    const employees = _getData(token);
    const filteredEmployees = employees.filter((employee) => !employee.deleted);
    res(filteredEmployees);
  });
}

function formatReceivedDate(date) {
  let formattedDate = date.replace("-", "/");
  formattedDate = formattedDate.replace("-", "/");
  return formattedDate;
}
function getBy(token, criterioBusca, query, dependencias = { _getData : getData}) {
  const { _getData } = dependencias;
  return new Promise((res) => {
    let employees = _getData(token);

    if (criterioBusca === "salario") {
      const queryArray = query.split(",");
      const minSalary = queryArray[0];
      const maxSalary = queryArray[1];
      const filteredEmployees = employees.filter(
        (employee) =>
          employee[criterioBusca] >= minSalary &&
          employee[criterioBusca] <= maxSalary &&
          !employee.deleted
      );
      return res(filteredEmployees);
    }
    if (criterioBusca === "dataCad") {
      let dateQuery = formatReceivedDate(query);
      const filteredEmployees = employees.filter(
        (employee) => employee[criterioBusca] === dateQuery && !employee.deleted
      );
      return res(filteredEmployees);
    }
   
    const filteredEmployees = employees.filter(
      (employee) => employee[criterioBusca] === query && !employee.deleted
    );

    res(filteredEmployees);
  });
}
function get(token, cpf) {
  return new Promise((res) => {
    const employees = getData(token);
    const employeeArr = employees.filter((item) => item.cpf === cpf);
    const employee = employeeArr[0];
    res(employee.deleted ? {} : employee);
  });
}

function save(token, newEmployee, dependencias = {_getData: getData}) {
  const { _getData } = dependencias;
  return new Promise((res) => {
    let employees = _getData(token);
    employees.push(newEmployee);
    res(newEmployee);
  });
}
function edit(token, cpf, editedEmployee, dependencias = {_getData: getData}) {
  const { _getData } = dependencias;
  return new Promise((res) => {
    let employees = _getData(token);
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === cpf
    );
    const employeeExists = employeeInDataBaseArr.length !== 0;

    if (employeeExists) {
      const employeeInDataBase = employeeInDataBaseArr[0];
      const index = employees.indexOf(employeeInDataBase);
      if (index !== -1) {
        employees[index] = editedEmployee;
        return res(editedEmployee);
      }
    }
    return res(null)
  });
}
function disable(token, cpf, dependencias = { _getData: getData}) {
  const { _getData } = dependencias;
  return new Promise((res) => {
    let employees = _getData(token);
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === cpf
    );
    const employeeInDataBase = employeeInDataBaseArr[0];
    employeeInDataBase.deleted = true;
    res(employeeInDataBase);
  });
}
module.exports = {
  get,
  getAll,
  getBy,
  save,
  edit,
  disable,

  // internal method, exporting for testing only
  getData,
};
