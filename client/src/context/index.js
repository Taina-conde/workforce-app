import React, { useState, useEffect } from "react";
import { getEmployees, saveNewEmployee } from "../api";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  onSaveNewEmployee: (employee) => {},
  onSearchEmployee: (criterioBusca, query) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployee] = useState([]);

  useEffect(() => {
      const allEmployees = getEmployees();
      setEmployees(allEmployees);
   
  }, []);

  const searchEmployeeHandler = (employees) => {
    setSearchedEmployees(employees)
  }

  const saveNewEmployeeHandler = (employee) => {
    setEmployees(employees.concat(employee));
  };

 
  const deleteEmployeeHandler = (cpf) => {
    
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