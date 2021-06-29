import React, { useState, useEffect } from "react";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  onSaveNewEmployee: (employee) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployee] = useState([]);

  useEffect(() => {
   
  }, []);

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
        onDeleteEmployee: deleteEmployeeHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;