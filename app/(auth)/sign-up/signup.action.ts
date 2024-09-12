"use server"
import { PrismaClient } from "@prisma/client"

type Props = {
    email: string
    password: string
}
const prisma = new PrismaClient()

export const signupAction = async(values: Props) => {
    const { email, password } = values

    const insertAdmin = await prisma.user.create({
        data: {
            email,
            password,
            role: "SUPER_ADMIN"
        }
    })

   if(!insertAdmin){
    return false
   }

   return true

}