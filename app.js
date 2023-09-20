const express = require("express");
const { employee } = require("./model/index");
const app = express();

app.set("view engine", "ejs");

require("./model/index");

app.use(express.static("public/"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Welcome ");
  res.render("home");
});

app.get("/ourTeams", (req, res) => {
  res.render("ourTeams.ejs");
});

app.get("/addEmployee", (req, res) => {
  res.render("addemployee.ejs");
});

app.post("/addEmployee", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const designation = req.body.employeepost;
  const EmployeeID = req.body.EmployeeID;
  console.log(req.body);

  await employee.create({
    name: name,
    age: age,
    designation: designation,
    employeeid: EmployeeID,
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Node Js Project has started at port 3000");
});
