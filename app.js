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

app.get("/ourTeams", async (req, res) => {
  const teams = await employee.findAll();
  console.log(teams);
  res.render("ourTeams.ejs", { teams: teams });
});

app.get("/addEmployee", (req, res) => {
  res.render("addemployee.ejs");
});

// Add to your Team
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

// Member Details
app.get("/single/:id", async (req, res) => {
  const id = req.params.id;
  const team = await employee.findAll({
    where: {
      id: id,
    },
  });
  res.render("team.ejs", { team: team });
});

//Delete Record
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await employee.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
});

//Update Record
app.get("/update/:id", async (req, res) => {
  const id = req.params.id;
  const team = await employee.findAll({
    where: {
      id: id,
    },
  });
  res.render("update.ejs", { team: team });
});

app.post("/updaterecord/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const designation = req.body.employeepost;
  const EmployeeID = req.body.EmployeeID;
  console.log(req.body);

  await employee.update(
    {
      name: name,
      age: age,
      designation: designation,
      employeeid: EmployeeID,
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.redirect("/single/" + id);
});

app.listen(3000, () => {
  console.log("Node Js Project has started at port 3000");
});
