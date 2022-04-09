import { Router, Request, Response } from "express";

import UserController from "./controllers/users.controller";

let routes = Router();


routes.get('/', (req:Request, res:Response) => {
    return res.send({
        message: 'Hello World'
    })
});

routes.get('/users', UserController.getAllUsers);
routes.post('/user', UserController.createUser);
routes.get('/user/:id', UserController.getUser);
routes.put('/user/:id', UserController.updateUser);
routes.delete('/user/:id', UserController.deleteUser);

export default routes;