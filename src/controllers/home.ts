import { Request, Response } from "express";
import { check, sanitize, validationResult } from "express-validator";
import { User } from "../models/user";

export const index = (req: Request, res: Response) => {
    check("username", "Username cannot be blank").isLength({min: 1});
    check("password", "Password cannot be blank").isLength({min: 1});

    // record to MongoDB
    const user = new User({ username: req.query.username,password: req.query.password});
    user.save((err, contact) => {
        if(err){
            res.send(err);
        }    
        res.json(contact);
    });
};