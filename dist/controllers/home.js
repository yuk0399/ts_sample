"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var user_1 = require("../models/user");
exports.index = function (req, res) {
    express_validator_1.check("username", "Username cannot be blank").isLength({ min: 1 });
    express_validator_1.check("password", "Password cannot be blank").isLength({ min: 1 });
    // record to MongoDB
    var user = new user_1.User({ user: req.query.username, password: req.query.password });
    user.save(function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
//# sourceMappingURL=home.js.map