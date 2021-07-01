import React, { useState, useEffect } from "react";
import {
  getByCategory,
  getEmployees,
  deleteEmployee,
  editEmployee,
  saveNewEmployee,
} from "../api-client";

const Context = React.createContext({
  employees: [],
  searchedEmployees: [],
  searchStarted: false,
  searchDetails: { searchCriteria: "", searchedQuery: "" },
  onSaveNewEmployee: (employee) => {},
  onEditEmployee: (cpf, editedEmployee) => {},
  onSearchEmployee: (criterioBusca, query) => {},
  onDeleteEmployee: (cpf) => {},
});

export const ContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);
  const [searchDetails, setSearchDetails] = useState({
    searchCriteria: "",
    searchedQuery: "",
  });

  useEffect(() => {
    const getEmployeesWrapper = async () => {
      const result = await getEmployees();
      //const result2 = await getByCategory();
      //console.log('in useEffect1: ', getByCategory.getMockImplementation());
      console.log("in useEffect2: ", result);
      //console.log('in useEffect3: ', result2);
      setEmployees(result);
    };
    getEmployeesWrapper();
  }, []);

  const searchEmployeeHandler = async (criterioBusca, query) => {
    console.log("mock function: ", getByCategory);
    //console.log('in search method: ', getByCategory.getMockImplementation());
    const res = await getByCategory();
    console.log("mock function: ", res);
    const results = await getByCategory(criterioBusca, query);
    if (searchStarted === false) {
      setSearchStarted(true);
    }
    setSearchedEmployees(results);
    setSearchDetails({ searchCriteria: criterioBusca, searchedQuery: query });
  };

  const saveNewEmployeeHandler = async (employee) => {
    const { searchCriteria, searchedQuery } = searchDetails;
    await saveNewEmployee(employee);
    let employeesCopy = [...employees];
    setEmployees(employeesCopy.concat(employee));
    console.log("searchDetails", searchDetails);
    if (searchCriteria === "salario") {
      const minSalary = searchedQuery[0];
      const maxSalary = searchedQuery[1];
      if (employee.salario >= minSalary && employee.salario <= maxSalary) {
        let searchedEmployeesCopy = [...searchedEmployees];
        searchedEmployeesCopy.push(employee);
        console.log("copy salario", searchedEmployeesCopy);
        setSearchedEmployees(searchedEmployeesCopy);
      }
      return
    }
    if (employee[searchCriteria] === searchedQuery) {
      let searchedEmployeesCopy = [...searchedEmployees];
      searchedEmployeesCopy.push(employee);
      console.log("copy other", searchedEmployeesCopy);
      setSearchedEmployees(searchedEmployeesCopy);
    }
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
        searchDetails,
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
