const { Router } = require("express");
const Ad = require("./model");
const router = new Router();

router.post("/ad", (request, response, next) => {
  Ad.create(request.body)
    .then(ad => response.send(ad))
    .catch(errors => next(errors));
});

module.exports = router;
