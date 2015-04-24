(function (controllers) {

    var queueController = require("./dispatchController");

    controllers.init = function (app) {
        queueController.init(app);
    };

})(module.exports);