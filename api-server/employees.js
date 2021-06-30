const dataDefault = require("./data");
const clone = require("clone");

let dataBase = {};

function getData(token) {
  let data = dataBase[token];
  if (data == null) {
    data = dataBase[token] = clone(dataDefault);
  }
  console.log(data);
  return data;
}
function getAll(token) {
  return new Promise((res) => {
    const employees = getData(token);
    const filteredEmployees = employees.filter((employee) => !employee.deleted);
    res(filteredEmployees);
  });
}

function formatReceivedDate(date) {
  let formattedDate = date.replace("-", "/");
  formattedDate = formattedDate.replace("-", "/");
  return formattedDate;
}
function getBy(token, criterioBusca, query) {
  return new Promise((res) => {
    let employees = getData(token);

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
      console.log("dateQuery", dateQuery);
      const filteredEmployees = employees.filter(
        (employee) => employee[criterioBusca] === dateQuery && !employee.deleted
      );
      return res(filteredEmployees);
    }
    console.log("query in getBy api-server", query);
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

function save(token, newEmployee) {
  return new Promise((res) => {
    let employees = getData(token);
    console.log("new employee", newEmployee);
    /*const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === newEmployee.cpf
    );
    const employeeExists = employeeInDataBaseArr.length !== 0;

    console.log("employeeExists", employeeExists);
    if (employeeExists) {
      const employeeInDataBase = employeeInDataBaseArr[0];
      let updatedEmployee = {};
      console.log("employeeindatbase", employeeInDataBase);
      for (prop in newEmployee) {
        updatedEmployee[prop] = newEmployee[prop];
      }
      console.log("edited updatedEmployee", updatedEmployee);
      employees.replace(employeeInDataBase, updatedEmployee);
      return res(updatedEmployee);
    }*/
    console.log("aqui dentro");
    employees.push(newEmployee);
    res(newEmployee);
  });
}
function edit(token, cpf, editedEmployee) {
  return new Promise((res) => {
    let employees = getData(token);
    const employeeInDataBaseArr = employees.filter(
      (employee) => employee.cpf === editedEmployee.cpf
    );
    const employeeExists = employeeInDataBaseArr.length !== 0;

    console.log("employeeExists", employeeExists);
    if (employeeExists) {
      const employeeInDataBase = employeeInDataBaseArr[0];
      console.log("employeeindatbase", employeeInDataBase);
      console.log("edited editedEmployee", editedEmployee);
      employees.replace(employeeInDataBase, editedEmployee);
    }
    return res(editedEmployee);
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
    console.log("employee in deleted", employeeInDataBase);
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
};
