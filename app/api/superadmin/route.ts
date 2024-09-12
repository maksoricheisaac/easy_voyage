import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const agencies = await prisma.agency.count()
    const messages = await prisma.message.count()
    const users = await prisma.user.count({where: {role: "USER"}})
    const agencyAdmins = await prisma.user.count({where: {role: "AGENCY_ADMIN"}})
    const bookings = await prisma.booking.count()
    const tickets = await prisma.ticket.count()
    const trips = await prisma.trip.count()

    return NextResponse.json
    (
        {   
            agencies,
            messages,
            users,
            agencyAdmins,
            bookings,
            tickets,
            trips
        },
        {status: 200}
    )
}