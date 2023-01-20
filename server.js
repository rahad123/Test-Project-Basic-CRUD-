const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { Router } = require("express");
const {
  getMinions,
  getMinion,
  createMinion,
  updateMinion,
  deleteMinion,
} = require("./src/minions/minions.controller");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

const router = Router();

app.get("/minions", getMinions);
app.get("/minions/:minionId", getMinion);
app.post('/minions', createMinion);
app.put("/minions/:minionId", updateMinion);
app.delete("/minions/:minionId", deleteMinion);

app.listen({ port: 3001 }, () => {
  console.info("Server running on port 3001");
});

module.exports = app;
