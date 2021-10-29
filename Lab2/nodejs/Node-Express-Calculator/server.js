const express = require("express");
const appControllers = require("./src/AppControllers");
const app = express();
const port = 8080;

appControllers.mapControllers(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
