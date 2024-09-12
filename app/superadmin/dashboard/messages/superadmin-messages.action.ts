"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export const getMessages = async(id?: string) => {

    if(id){
        const message = await prisma.message.findUnique({
            where: {
                id
            }
        })

        return {message}
    }

    const messages = await prisma.message.findMany({
        orderBy: {
            sendedAt: "desc"
        }
    })

    return {messages}
}

export const deleteMessage = async(messageId: string) => {
    const messages = await prisma.message.delete({
        where: {
            id: messageId
        }
    })

    revalidatePath('/superadmin/dashboard/messages')
    
}