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

    createUser = async (request:Request, response:Response) => {
        const { name, email, password } = request.body;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: String(password)
            }
        });
        if(user) {
            return response.status(201).json(user);
        }
        return response.status(400).json({
            message: 'Failed to create user'
        });
    }

    getUser = async (request:Request, response:Response) => {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        if(user) {
            return response.status(200).json(user);
        }
        return response.status(404).json({
            message: 'User not found'
        });
    }

    updateUser = async (request:Request, response:Response) => {
        const { id } = request.params;
        const { name, email, password } = request.body;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(user) {
            const updatedUser = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name,
                    email,
                    password: String(password)
                }
            });
            return response.status(200).json(updatedUser);
        }

        return response.status(404).json({
            message: 'User not found'
        });
    }

    deleteUser = async (request:Request, response:Response) => {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        if(user) {
            await prisma.user.delete({
                where: {
                    id: Number(id)
                }
            });
            return response.status(200).json({
                message: 'User deleted'
            });
        }
        return response.status(404).json({
            message: 'User not found'
        });
    }
}

export default new UserController();