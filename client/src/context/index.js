import React, { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "../api";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  onSaveNewEmployee: (employee) => {},
  onSearchEmployee: (employees) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);

  useEffect(() => {
    const allEmployees = getEmployees();
    setEmployees(allEmployees);
  }, []);

  const searchEmployeeHandler = (employees) => {
    setSearchedEmployees(employees);
  };

  const saveNewEmployeeHandler = (employee) => {
    setEmployees(employees.concat(employee));
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
        onSaveNewEmployee: saveNewEmployeeHandler,
        onSearchEmployee: searchEmployeeHandler,
        onDeleteEmployee: deleteEmployeeHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
