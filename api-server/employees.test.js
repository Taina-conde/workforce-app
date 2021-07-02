const dataDefault = require("./data");
const employees = require("./employees");

const { getData, getAll } = employees;

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
        ],
      );
    const result = await getAll("meuToken", { _getData: mockGetData});

    expect(result).toEqual([
      { nome: "Hermione", deleted: false },
      { nome: "Rony", deleted: false },
    ]);
  });
  it("", () => {});
});
