(function(dispatchController) {

    //var queues = require("../queues");

    dispatchController.init = function(app) {

        app.get("/", function(req, res) {
            //queues.pop(function(err, results) {
            //    if (err) {
            //        console.log(err);
            //        res.status(400).send(err);
            //    } else {
            //        res.set("Content-Type", "application/json");
            //        res.send(results);
            //    }
            //});
            res.render('index', { title: 'Express' });
        });

        app.post("/push", function(req, res) {

            if (!req.body) return res.status(400).send(err);
            var msg = req.body;

            //queues.push(msg, function(err, results) {
            //    if (err) {
            //        console.log(err);
            //        res.status(400).send(err);
            //    } else {
            //        console.log(results);
            //        res.set("Content-Type", "application/json");
            //        res.send(results);
            //    }
            //});
        });
    };

})(module.exports);