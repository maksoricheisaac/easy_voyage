"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

type Props = {
    name: string
    email: string
}


export const getAgencies = async(id?: string) => {

    if(id){
        const agency = await prisma.agency.findUnique({
            where: {
                id
            }
        })

        
        const trips = await prisma.trip.findMany({
            where: {
                agencyId: id
            }
        })

        const bookings = await prisma.booking.findMany({
            where: {
                agencyId: id
            }
        })

        const tickets = await prisma.ticket.findMany({
            where: {
                agencyId: id
            }
        })


        return {agency, trips, bookings, tickets}
    }

    const agencies = await prisma.agency.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return {agencies}
}



export const addAgency = async (values: Props) => {
    const verify = await prisma.agency.findUnique({
        where: {
            email: values.email
        }
    })

    if(verify){
        return 400
    }

    const newAgency = await prisma.agency.create({
        data: values
    })

    return 200

    revalidatePath('/superadmin/dashboard/agencies/add')

}

export const deleteAgency = async(messageId: string) => {
    const agencies = await prisma.agency.delete({
        where: {
            id: messageId
        }
    })

    revalidatePath('/superadmin/dashboard/agencies')
    
}