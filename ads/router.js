const { Router } = require("express");
const Ad = require("./model");
const router = new Router();

router.post("/ad", (request, response, next) => {
  Ad.create(request.body)
    .then(ad => response.send(ad))
    .catch(errors => next(errors));
});

router.get("/ad", (request, response, next) => {
  const limit = request.query.limit || 10;
  const offset = request.query.offset || 0;

  Ad.findAndCountAll({ limit, offset })
    .then(result => response.send({ events: result.rows, total: result.count }))
    .catch(error => next(error));
});

router.get("/ad/:id", (request, respose, next) => {
  Ad.findByPk(request.params.id)
    .then(ad => respose.send(ad))
    .catch(errors => next(errors));
});

router.put("/ad/:id", (request, response, next) =>
  Ad.findByPk(request.params.id)
    .then(ad => ad.update(request.body))
    .then(ad => response.send(ad))
    .catch(next)
);

router.delete("/ad/:id", (request, response, next) =>
  Ad.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
