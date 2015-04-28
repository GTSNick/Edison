(function(dispatchController) {

    var Dispatch = require("../models/dispatchServerModel.js");

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

        app.post("/test", function(req, res) {

            var dispatch = new Dispatch({
                tpaId: req.body.tpaid,
                customData: req.body.darest
            });

            dispatch.save(function( err){
                if (err) {
                    console.log(err);
                    //TODO: Error handling is here.
                    res.status(400).send({message: err});
                }
                else
                {
                    console.log('Success!');
                    //TODO: Return a success message.
                    res.set("Content-Type", "application/json");
                    res.status(200).send({message: 'Success'});
                }
            });

            //res.render('index', { title: 'ExpressTest' });

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