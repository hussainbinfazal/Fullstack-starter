// Here we shall define the userController for handling user-related operations
import { PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';
import { User } from '../types';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password, name, phone, role, profilePicture }: 
            { email: string; password: string; name?: string; phone?: string; role?: string; profilePicture?: string } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user: User = await prisma.user.create({
            data: {
                email,
                password,
                name,
                phone,
                role,
                profilePicture
            }
        });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'User ID is required and must be a number' });
        }
        const user: User | null = await prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'User ID is required and must be a number' });
        }
        const user: User | null = await prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};