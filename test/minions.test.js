const mocha = require("mocha");
// const faker = require("faker");
const { assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { createMinion } = require("../src/minions/minions.service");
const _p = require("../helpers/asyncWrapper");
const app = require("../server");

chai.use(chaiHttp);

const mockDataForCreateMinion = async (args = null) => {
  const minionInput = {
    name: "minion",
    age: 27,
    color: "red",
  };

  const input = args ? args : minionInput;
  const user = await createMinion(input);
  return user;
};

describe("minion test suit", () => {
  it("minion can create", async () => {
    const userInput = await mockDataForCreateMinion();
    const [err, res] = await _p(
      chai
        .request(app)
        .post("/minions")
        .send(userInput)
    );
    console.log(res.body.data);
    const minion = res.body.data.createUser;
    console.log(minion);
  });
});
