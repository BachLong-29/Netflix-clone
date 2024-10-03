"use server"

import { authOptions } from "./utils/auth"
import { getServerSession } from "next-auth"
import prisma from "./utils/db"
import { revalidatePath } from "next/cache"

export const addToWatchList = async (formData: FormData) => {
    "use server"

    const movieId = formData.get('movieId');
    const pathname = formData.get('pathname') as string;
    const session = await getServerSession(authOptions);
    await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId), 
        }
    });

    revalidatePath(pathname);
}

export const deleteFromWatchList = async (formData: FormData) => {
    "use server"

    const watchListId = formData.get('watchListId') as string;
    const pathname = formData.get('pathname') as string;
    await prisma.watchList.delete({
      where: {
        id: watchListId
      }
    });

    revalidatePath(pathname);
}