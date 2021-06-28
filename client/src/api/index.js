const api = "http://localhost:3001";
const header = {
  headers: {
    Authorization: "app",
  },
};

export async function getEmployees() {
  const employeeResponses = await window.fetch(`${api}/employees`, header);
  console.log("employeeResponses", employeeResponses)
  const employees = await employeeResponses.json();
  

  return employees;
}