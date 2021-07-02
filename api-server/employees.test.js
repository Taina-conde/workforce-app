const dataDefault = require("./data");
const employees = require("./employees");

const { getData, getAll, getBy, save, edit, disable } = employees;

describe("getData", () => {
  it("assigns dataDefault to db and returns it db does not have token well defined", () => {
    const emptyDb = {};
    const result = getData("meuToken", { db: emptyDb });

    expect(result).toEqual(dataDefault);
    expect(emptyDb).toEqual({ meuToken: dataDefault });
  });

  it("returns values from db if it has a defined token field in db", () => {
    const mockDb = { oi: [] };
    const result = getData("oi", { db: mockDb });

    expect(result).toEqual([]);
    expect(mockDb).toEqual({ oi: [] });
  });
});
describe("getAll", () => {
  it("returns all the employees in the db that were not deleted", async () => {
    const mockGetData = jest.fn().mockReturnValue([
      {
        nome: "Harry",
        deleted: true,
      },
      { nome: "Hermione", deleted: false },
      { nome: "Rony", deleted: false },
    ]);
    const result = await getAll("meuToken", { _getData: mockGetData });

    expect(result).toEqual([
      { nome: "Hermione", deleted: false },
      { nome: "Rony", deleted: false },
    ]);
  });
});

describe("getBy", () => {
  it("if search criteria is salario, returns the employees that were not deleted and whose salary is in the query range", async () => {
    const mockGetData = jest.fn().mockReturnValue([
      {
        nome: "Harry",
        deleted: true,
        salario: 1000,
      },
      {
        nome: "Draco",
        deleted: true,
        salario: 2500,
      },
      {
        nome: "Snape",
        deleted: false,
        salario: 2500,
      },

      {
        nome: "Hermione",
        deleted: false,
        salario: 8000,
      },
      {
        nome: "Rony",
        deleted: false,
        salario: 5000,
      },
    ]);
    const result = await getBy("meuToken", "salario", "2000, 6000", {
      _getData: mockGetData,
    });
    expect(result).toEqual([
      {
        nome: "Snape",
        deleted: false,
        salario: 2500,
      },
      {
        nome: "Rony",
        deleted: false,
        salario: 5000,
      },
    ]);
  });
  it("if search criteria is dataCad, returns the employees not deleted that match the query", async () => {
    const mockGetData = jest.fn().mockReturnValue([
      {
        nome: "Harry",
        deleted: true,
        dataCad: "12/06/2021",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
      },
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
      },
    ]);
    const result = await getBy("meuToken", "dataCad", "12/06/2021", {
      _getData: mockGetData,
    });
    expect(result).toEqual([
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
      },
    ]);
  });
  it("if search criteria is not salario or dataCad, returns the employee not deleted that match the query", async () => {
    const mockGetData = jest.fn().mockReturnValue([
      {
        nome: "Harry",
        deleted: true,
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        ufNasc: "MG",
      },
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
        ufNasc: "DF",
      },
    ]);
    const result = await getBy("meuToken", "ufNasc", "DF", {
      _getData: mockGetData,
    });
    expect(result).toEqual([
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
        ufNasc: "DF",
      },
    ]);
  });
});

describe("save", () => {
  it("saves new employee to data base", async () => {
    const mockEmployees = [
      {
        nome: "Harry",
        deleted: true,
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        ufNasc: "MG",
      },
    ];
    const mockGetData = jest.fn().mockReturnValue(mockEmployees);
    const result = await save(
      "meuToken",
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
        ufNasc: "DF",
      },
      {
        _getData: mockGetData,
      }
    );
    expect(mockEmployees).toEqual([
      {
        nome: "Harry",
        deleted: true,
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        ufNasc: "MG",
      },
      {
        nome: "Snape",
        deleted: false,
        dataCad: "12/06/2021",
        ufNasc: "DF",
      },
    ]);
  });
});

describe("edit", () => {
  it("returns invalid value if employee does not exist in the data base", async () => {
    const mockEmployees = [
      {
        nome: "Harry",
        deleted: false,
        cpf: "12345678901",
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        cpf: "09876543210",
        ufNasc: "MG",
      },
    ];
    const mockGetData = jest.fn().mockReturnValue(mockEmployees);
    const result = await edit(
      "meuToken",
      "01928374650",
      {
        nome: "Lord Voldemort",
        deleted: false,
        cpf: "01928374650",
        dataCad: "12/06/2021",
        ufNasc: "MA",
      },
      {
        _getData: mockGetData,
      }
    );
    expect(result).toBe(null);
  });
  it("if employee already exists returns the edited employee", async () => {
    const mockEmployees = [
      {
        nome: "Harry",
        deleted: false,
        cpf: "12345678901",
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        cpf: "09876543210",
        ufNasc: "MG",
      },
    ];
    const mockGetData = jest.fn().mockReturnValue(mockEmployees);
    const result = await edit(
      "meuToken",
      "12345678901",
      {
        nome: "Lord Voldemort",
        deleted: false,
        cpf: "12345678901",
        dataCad: "12/06/2021",
        ufNasc: "MA",
      },
      {
        _getData: mockGetData,
      }
    );
    expect(result).toEqual({
      nome: "Lord Voldemort",
      deleted: false,
      cpf: "12345678901",
      dataCad: "12/06/2021",
      ufNasc: "MA",
    });
  });
  it("if employee already exists, update the employee in the data base with the new info", async () => {
    const mockEmployees = [
      {
        nome: "Harry",
        deleted: false,
        cpf: "12345678901",
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        cpf: "09876543210",
        ufNasc: "MG",
      },
    ];
    const mockGetData = jest.fn().mockReturnValue(mockEmployees);
    const result = await edit(
      "meuToken",
      "12345678901",
      {
        nome: "Lord Voldemort",
        deleted: false,
        cpf: "12345678901",
        dataCad: "12/06/2021",
        ufNasc: "MA",
      },
      {
        _getData: mockGetData,
      }
    );
    expect(mockEmployees).toEqual([
      {
        nome: "Lord Voldemort",
        deleted: false,
        cpf: "12345678901",
        dataCad: "12/06/2021",
        ufNasc: "MA",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        cpf: "09876543210",
        ufNasc: "MG",
      },
    ]);
  });
});

describe("disable", () => {
  it("disable employee and returns the disabled employee", async () => {
    const mockEmployees = [
      {
        nome: "Harry",
        deleted: false,
        cpf: "12345678901",
        dataCad: "12/06/2021",
        ufNasc: "DF",
      },
      {
        nome: "Draco",
        deleted: false,
        dataCad: "11/06/2017",
        cpf: "09876543210",
        ufNasc: "MG",
      },
    ];
    const mockGetData = jest.fn().mockReturnValue(mockEmployees);
    const result = await disable("meuToken", "12345678901", {
      _getData: mockGetData,
    });
    expect(result).toEqual({
      nome: "Harry",
      deleted: true,
      cpf: "12345678901",
      dataCad: "12/06/2021",
      ufNasc: "DF",
    });
  });
});
