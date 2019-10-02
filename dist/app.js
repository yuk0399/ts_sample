"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var homeController = __importStar(require("./controllers/home"));
var App = /** @class */ (function () {
    function App() {
        this.mongoUrl = 'mongodb+srv://yuk0399:password9@mongocluster-b9ii7.mongodb.net/test?retryWrites=true&w=majority';
        this.app = express_1.default();
        this.app.set("port", process.env.PORT || 3000);
        this.app.get("/", homeController.index);
        this.config();
        this.mongoSetup();
    }
    App.prototype.config = function () {
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(this.mongoUrl);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map