import React, { useState, useEffect } from "react";
import {
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
  onSearchEmployee: (employees) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);

  useEffect(() => {
    const employeesInDataBase = getEmployees();
    setEmployees(employeesInDataBase);
  }, []);

  const searchEmployeeHandler = (employees) => {
    setSearchedEmployees(employees);
    if (searchStarted === false) {
      setSearchStarted(true);
    }
  };

  const saveNewEmployeeHandler = (employee) => {
    saveNewEmployee(employee);
    setEmployees(employees.concat(employee));
  };
  const editEmployeeHandler = (editedEmployee) => {
    editEmployee(editedEmployee);
    const employeeInDataBaseArr = employees.filter(
      (e) => e.cpf === editedEmployee.cpf
    );
    const employeeInDataBase = employeeInDataBaseArr[0];
    setEmployees(employees.replace(employeeInDataBase, editedEmployee));
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
