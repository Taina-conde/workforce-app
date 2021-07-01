import React, { useState, useEffect } from "react";
import {
  getByCategory as defaultGetByCategory,
  getEmployees as defaultGetEmployees,
  deleteEmployee as defaultDeleteEmployee,
  editEmployee,
  saveNewEmployee,
} from "../api";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  searchStarted: false,
  onSaveNewEmployee: (employee) => {},
  onEditEmployee: (cpf, editedEmployee) => {},
  onSearchEmployee: (criterioBusca, query) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const {
      getEmployees,
      getByCategory,
      deleteEmployee,
    } = props;

  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);

  useEffect(() => {
      const getEmployeesWrapper = async() => {
        const result = await getEmployees();
        //const result2 = await getByCategory();
        //console.log('in useEffect1: ', getByCategory.getMockImplementation());
        console.log('in useEffect2: ', result);
        //console.log('in useEffect3: ', result2);
        setEmployees(result)
      };
      getEmployeesWrapper();
  }, [getEmployees]);

  const searchEmployeeHandler = async (criterioBusca, query) => {
    console.log('mock function: ', getByCategory);
    console.log('in search method: ', getByCategory.getMockImplementation());
    const res = await getByCategory();
    console.log('mock function: ', res);
    const results = await getByCategory(criterioBusca, query);
    if (searchStarted === false) {
        setSearchStarted(true);
    }
    setSearchedEmployees(results);
  };

  const saveNewEmployeeHandler = async (employee) => {
    await saveNewEmployee(employee);
    setEmployees([...employees].concat(employee));
  };
  const editEmployeeHandler = (cpf, editedEmployee) => {
    editEmployee(cpf, editedEmployee);
    let employeesCopy = [...employees];
    const employeeInDataBaseArr = employees.filter((e) => e.cpf === cpf);
    const employeeInDataBase = employeeInDataBaseArr[0];
    const index = employees.indexOf(employeeInDataBase);
    if (index !== -1) {
      employeesCopy[index] = editedEmployee;
    }
    setEmployees(employeesCopy);

    let indexSearched = -1;
    searchedEmployees.forEach((e, idx) => {
      if (e.cpf === cpf) {
        indexSearched = idx;
      }
    });
    if (indexSearched !== -1) {
      let searchedEmployeesCopy = [...searchedEmployees];
      searchedEmployeesCopy[indexSearched] = editedEmployee;
      setSearchedEmployees(searchedEmployeesCopy);
    }
  };

  const deleteEmployeeHandler = async (cpf) => {
    await deleteEmployee(cpf);
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

Context.defaultProps = {
  getByCategory: defaultGetByCategory,
  getEmployees: defaultGetEmployees,
  deleteEmployee: defaultDeleteEmployee,
};

export default Context;
