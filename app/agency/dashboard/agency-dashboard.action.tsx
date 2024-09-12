"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getData = async(agencyId: string) => {

    const trips = await prisma.trip.count({where: {agencyId}})
    const bookings = await prisma.booking.count({where: {agencyId}})
    const tickets = await prisma.ticket.count({where: {agencyId}})

    return {trips, bookings, tickets}
}