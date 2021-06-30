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
export async function getByCategory(criterioBusca, query) {
    const response = await window.fetch(`${api}/employees/${criterioBusca}/${query}`, header);
    const searchedEmployees = await response.json();
    console.log('employee searched', searchedEmployees)
    return searchedEmployees;
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
export async function editEmployee(cpf, employee) {
    const response = await window.fetch(`${api}/employees/${cpf}`, {
        method: 'PUT',
        headers: {
            Authorization: "app",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    const employeeResponse = await response.json();
    console.log("employee edit", employeeResponse)
    return employeeResponse
}
export async function deleteEmployee(cpf) {
    const response = await window.fetch(`${api}/employees/${cpf}`, {
        method: "DELETE",
        headers: {
          Authorization: "app",
        },
      });
    
      const deleteResponse = await response.json();
      return deleteResponse;
}