import { prisma } from "../libs/prisma";

type CreateUsers = {
    name: string, email: string
}

export const createUser = async ({name, email}: CreateUsers) => {
    const user = await prisma.user.create({
        data: {name, email}
    });
    return user;
}