const express = require("express");
const app = require("express")();

const PORT = 3000;

// runs when start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./router");

//  Connect all routes to the app
app.use("/", routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = app;
