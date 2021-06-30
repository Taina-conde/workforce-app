import React, { useState, useEffect } from "react";
import {
  getByCategory,
  getEmployees,
  deleteEmployee,
  editEmployee,
  saveNewEmployee,
} from "../api";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  searchStarted: false,
  onSaveNewEmployee: (employee) => {},
  onEditEmployee: (editedEmployee) => {},
  onSearchEmployee: (criterioBusca, query) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);

  useEffect(() => {
    getEmployees().then((results) => setEmployees(results));
  }, []);

  const searchEmployeeHandler = (criterioBusca, query) => {
    getByCategory(criterioBusca, query).then((results) => {
      if (searchStarted === false) {
        setSearchStarted(true);
      }
      setSearchedEmployees(results);
    });
  };

  const saveNewEmployeeHandler = (employee) => {
    saveNewEmployee(employee);
    setEmployees(employees.concat(employee));
  };
  const editEmployeeHandler = (editedEmployee) => {
    editEmployee(editedEmployee);
    let employeesCopy = employees;
    const employeeInDataBaseArr = employees.filter(
      (e) => e.cpf === editedEmployee.cpf
    );
    const employeeInDataBase = employeeInDataBaseArr[0];
    const index = employees.indexOf(employeeInDataBase);
    if (index !== -1) {
        employeesCopy[index] = editedEmployee
    }
    setEmployees(employeesCopy);
    
  };

  const deleteEmployeeHandler = (cpf) => {
    deleteEmployee(cpf);
    const searchedEmployeesWithoutDeleted = searchedEmployees.filter(
      (employee) => employee.cpf !== cpf
    );
    setSearchedEmployees(searchedEmployeesWithoutDeleted);
  };

  return (
    <Context.Provider
      value={{
        employees,
        searchedEmployees,
        searchStarted,
        onSaveNewEmployee: saveNewEmployeeHandler,
        onSearchEmployee: searchEmployeeHandler,
        onDeleteEmployee: deleteEmployeeHandler,
        onEditEmployee: editEmployeeHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
