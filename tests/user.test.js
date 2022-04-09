import UserController from "../src/controllers/users.controller";
import request from "supertest";
import app from "../src/app";





describe('Get Users Test', () => {
    it('should return all users from database', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    })
})

describe('Get User Test', () => {
    it('should return a user from database', async () => {
        const id = 1;
        const response = await request(app).get(`/user/${id}`);
        expect(response.status).toBe(200);
    })
})

describe('Create User Test', () => {
    it('should create a user in database', async () => {
        const user = {
            name: "Teste",
            email: "test@mail.com",
            password: "123456"
        }
        const response = await request(app).post('/user').send(user);
        expect(response.status).toBe(201);
    })
})

describe('Update User Test', () => {
    it('should update a user in database', async () => {
        const user = {
            name: "New name",
            email: "newmail@mail.com",
            password: "newPassword"
        }
        const id = 1;
        const response = await request(app).put(`/user/${id}`).send(user);
        expect(response.status).toBe(200);
    })
    
})

describe('Delete User Test', () => {
    it('should delete a user in database', async () => {
        const id = 6;
        const response = await request(app).delete(`/user/${id}`);
        expect(response.status).toBe(200);
    })
})