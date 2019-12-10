const express = require("express");
const port = process.env.PORT || 4000;
const router = require("./ads/router");
const app = express();

app.use(router);

app.listen(port, () => console.log(`Hey, I'm on port ${port}!`));
