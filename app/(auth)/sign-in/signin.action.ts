"use server"
import { PrismaClient } from "@prisma/client"


type Props = {
    email: string
    password: string
}

const prisma = new PrismaClient()

export const signinAction = async(values: Props) => {
    const user = await prisma.user.findUnique({
        where:{
            email: values.email
        }
    })



}