var maths = require("./MathsModule");

exports.mapControllers = function (app) {
  mapIndex(app);
  mapAdd(app);
  mapMinus(app);
};

function mapAdd(app) {
  app.get("/calc/:val1/plus/:val2", (req, res) => {
    var value1 = parseInt(req.params.val1);
    var value2 = parseInt(req.params.val2);

    var result = maths.plus(value1, value2);

    res.send("" + result);
  });
}

function mapMinus(app) {
  app.get("/calc/:val1/minus/:val2", (req, res) => {
    var value1 = parseInt(req.params.val1);
    var value2 = parseInt(req.params.val2);

    var result = maths.minus(value1, value2);

    res.send("" + result);
  });
}

function mapIndex(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to the Node.JS Express Calculator! V 0.1");
  });
}
