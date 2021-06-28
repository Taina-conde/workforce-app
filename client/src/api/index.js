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
    console.log("query", query)
    const response = await window.fetch(`${api}/employees/${criterioBusca}/${query}`, header);
    console.log("response" , response)
    const employee = await response.json();
    console.log('employee', employee)
    return employee
}