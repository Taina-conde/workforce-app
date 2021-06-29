import { formatEmployee } from "../helpers";
const api = "http://localhost:3001";
const header = {
  headers: {
    Authorization: "app",
  },
};

export async function getEmployees() {
  const employeeResponses = await window.fetch(`${api}/employees`, header);
  const employees = await employeeResponses.json();
  return employees;
}
export async function getBy(criterioBusca, query) {
    const response = await window.fetch(`${api}/employees/${criterioBusca}/${query}`, header);
    const employee = await response.json();
    console.log('employee searched', employee)
    return employee
}
export async function saveNewEmployee(employee) {
    const formattedEmployee = formatEmployee(employee)
    console.log("formatted employee", formattedEmployee)
    const response = await window.fetch(`${api}/employees`, {
        method: 'POST',
        headers: {
            Authorization: "app",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formattedEmployee)
    })
    const employeeResponse = await response.json();
    console.log("employee save", employeeResponse)
    return employeeResponse
}