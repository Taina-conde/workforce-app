export const ufs = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export const cargos = [
  "Dev Jr",
  "Dev Pl",
  "Dev Sr",
  "PO Jr",
  "PO Pl",
  "PO Sr",
  "AC Jr",
  "AC Pl",
  "AC Sr",
  "Analista Jr",
  "Analista Pl",
  "Analista Sr",
];
export const statusArr = ["ATIVO", "INATIVO", "BLOQUEADO"];

export const criteriosArr = [
  { id: "nome", criterio: "Nome" },
  { id: "cpf", criterio: "CPF" },
  { id: "cargo", criterio: "Cargo" },
  { id: "dataCad", criterio: "Data de cadastro" },
  { id: "ufNasc", criterio: "UF de nascimento" },
  { id: "salario", criterio: "Salário" },
  { id: "status", criterio: "Status" },
];

export const sliderMarks = [
  { value: 0, label: "R$ 0,00" },
  { value: 2500, label: "R$ 2.5mil" },
  { value: 5000, label: "R$ 5mil" },
  { value: 7500, label: "R$ 7.5 mil" },
  { value: 10000, label: "R$ 10mil" },
];

export function formatDateToSend(date) {
  let formattedDate = date.toLocaleDateString("en-GB");
  formattedDate = formattedDate.replace("/", "-");
  formattedDate = formattedDate.replace("/", "-");
  return formattedDate;
}
function formatDatePt(date) {
  let formattedDate = date.toLocaleDateString("en-GB");

  return formattedDate;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export function formatName(fullName) {
  let formattedName = fullName.toLowerCase();
  const nameArr = formattedName.split(" ");
  const nameArrCapitalLetter = nameArr.map((word) => capitalize(word));
  formattedName = nameArrCapitalLetter.join(" ");
  return formattedName;
}
export function formatEmployee(employee) {
  return {
    DataCad: formatDatePt(new Date()),
    Cargo: employee.cargo,
    Cpf: employee.cpf,
    Nome: formatName(employee.nome),
    UfNasc: employee.ufNasc.toUpperCase(),
    Salario: Number(employee.salario),
    Status: employee.status.toUpperCase(),
    deleted: false,
  };
}
