const { Router } = require("express");
const User = require("./model");
const router = new Router();
const bcrypt = require("bcrypt");

router.post("/user", (request, response, next) => {
  const user = {
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 3)
  };
  User.create(user)
    .then(user => response.send(user))
    .catch(errors => next(errors));
});

module.exports = router;
