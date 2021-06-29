import React, { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "../api";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  searchStarted: false,
  onSaveNewEmployee: (employee) => {},
  onSearchEmployee: (employees) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);

  useEffect(() => {
    const allEmployees = getEmployees();
    setEmployees(allEmployees);
  }, []);

  const searchEmployeeHandler = (employees) => {
    setSearchedEmployees(employees);
    if (searchStarted === false) {
        setSearchStarted(true);
    }
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
        searchStarted,
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
