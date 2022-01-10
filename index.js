const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("AppName", "NodeExpress");
app.set("port", 3000);
app.set("view engine", "ejs");

//Middlewwares
app.use(express.json());
app.use(morgan("dev"));

//Routes
/* app.all('/user',(req,res,next) => {
  console.log('Por aqui paso');
  next();
}) */

app.get("/", (req, res) => {
  const data = [{ name: "Santigo" }, { name: "Coscu" }];
  res.render("index.ejs", { people: data });
});

app.get("/user", (req, res) => {
  res.json({
    nombre: "Coscu",
    apellido: "Mesa",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Hola Mundo desde NodeJS con el metodo post");
});

app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});

app.delete("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(app.get("AppName"));
  console.log("Servidor en el puerto", app.get("port"));
});
