import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")
    const bookingId =  req.nextUrl.searchParams.get("bookingId")

    if(!id) {
        return
    }

    if(bookingId){
        const booking = await prisma.booking.findUnique({
            where: {
                id: bookingId,
                userId: id,
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

export async function POST(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")
    const agencyId = req.nextUrl.searchParams.get("agencyId")
    const data = await req.json()

}

export async function DELETE(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")
    const bookingId =  req.nextUrl.searchParams.get("bookingId")

    if(!id || !bookingId){
        return
    }

    const verify = await prisma.booking.findUnique({
        where: {
            id: bookingId,
            userId: id,
        }
    })

    if(!verify){
        return NextResponse.json({msg: "Réservation non repertoriée"}, {status: 400})
    }

    await prisma.booking.delete({
        where: {
            id: bookingId,
            userId: id
        }
    })

    return NextResponse.json({msg: "Réservation supprimée avec succès"}, {status: 200})

    
}