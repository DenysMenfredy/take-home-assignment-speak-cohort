import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserController {
    getAllUsers = async (request:Request, response:Response) => {
        const users = await prisma.user.findMany();
        if(users) {
            return response.status(200).json(users);
        }
        return response.status(400).json({
            message: 'Bad Request'
        });
    }
}

export default new UserController();