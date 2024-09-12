"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getData = async() => {
    const agencies = await prisma.agency.count()
    const messages = await prisma.message.count()
    const users = await prisma.user.count({where: {role: "USER"}})
    const agencyAdmins = await prisma.user.count({where: {role: "AGENCY_ADMIN"}})
    const bookings = await prisma.booking.count()
    const tickets = await prisma.ticket.count()
    const trips = await prisma.trip.count()
    const total = 0

    return {agencies, messages, users, agencyAdmins, bookings, tickets, trips, total }
    
}