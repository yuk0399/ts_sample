import express from "express";
import mongoose from "mongoose";
import * as homeController from "./controllers/home";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb+srv://yuk0399:password9@mongocluster-b9ii7.mongodb.net/ts_sample?retryWrites=true&w=majority';
    
    constructor() {
        this.app = express();
        this.app.set("port", process.env.PORT || 3000);
        this.app.get("/", homeController.index);
        this.config();
        this.mongoSetup();
    }
    private config(): void{
        
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}

export default new App().app;