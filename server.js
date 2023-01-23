const express = require("express");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users");
const usersSignup = require("./routes/auth/signup");
const usersLogin = require("./routes/auth/login");

const sauceRouter = require("./routes/sauces");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/users", usersRouter);
app.use("/signup", usersSignup);
app.use("/login", usersLogin);

app.use("/sauces", sauceRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});