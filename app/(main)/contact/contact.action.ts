"use server"
import { PrismaClient } from "@prisma/client"
type Props = {
    firstname: string
    lastname: string
    email: string
    phone: string
    message: string
}

const prisma = new PrismaClient()

export const ContactAction = async(values: Props) => {
   const newMessage = await prisma.message.create({
    data: values
   })

   return newMessage
}