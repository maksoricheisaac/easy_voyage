import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const agencyId = req.nextUrl.searchParams.get("agencyId")

    if(!agencyId){
        return
    }

    const trips = await prisma.trip.count({where: {agencyId}})
    const bookings = await prisma.booking.count({where: {agencyId}})
    const tickets = await prisma.ticket.count({where: {agencyId}})

    return NextResponse.json({trips, bookings, tickets}, {status: 200})
}