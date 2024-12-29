import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
   try{
        return await prisma.user.create({ data });
   } catch(error){
        return false;
   }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try{
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        });
    } catch (error){   
        return false;
    }
}

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        
    });
    return users;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where:{ email }
    });
    return user;
}

export const updateUser = async () => {
    const updatedUser = await prisma.user.update({
        where:{
            email: 'beel.alves@hotmail.com'
        },
        data: {
            role: 'ADMIN'
        }
    });

    return updatedUser;
}

export const deleteUser = async () => {
    const result = await prisma.user.delete({
        where:{
            email: 'beel.alves@hotmail.com'
        }
    });

    return result;
}