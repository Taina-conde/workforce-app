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
    return employee
}
export async function saveNewEmployee(employee) {
    const response = await window.fetch(`${api}/employees`, {
        method: 'POST',
        headers: {
            Authorization: "app",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    const employeeResponse = await response.json();
    console.log("employee save", employeeResponse)
    return employeeResponse
}