import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const booking = await prisma.booking.findUnique({
            where: {
                id
            }
        })

        if(!booking){
            return NextResponse.json({msg: "Réservation non repertoriée"}, {status: 400})
        }

        return NextResponse.json({booking}, {status: 200})
    }

    const bookings = await prisma.booking.findMany()

    return NextResponse.json({bookings}, {status: 200})
}
