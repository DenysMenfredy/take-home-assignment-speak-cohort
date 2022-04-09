import { Router, Request, Response } from "express";

import UserController from "./controllers/users.controller";

let routes = Router();


routes.get('/', (req:Request, res:Response) => {
    return res.send({
        message: 'Hello World'
    })
});

routes.get('/users', UserController.getAllUsers);
// routes.post('/user', UserController.createUser);

export default routes;