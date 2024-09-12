import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const agencyId = req.nextUrl.searchParams.get("agencyId")
    const id = req.nextUrl.searchParams.get("id")

    if(!agencyId){
        return
    }

    if(id){
        const trip = await prisma.trip.findUnique({
            where: {
                id,
                agencyId
            }
        })

        if(!trip){
            return NextResponse.json("Destination non repertoriée", {status: 400})
        }

        return NextResponse.json(trip, {status: 200})
    }

    const trips = await prisma.trip.findMany(
        {
            where: {
                agencyId
            }
        }
    )

    return NextResponse.json(trips, {status: 200})
}

export async function POST(req: NextRequest){
    const agencyId = req.nextUrl.searchParams.get("agencyId")

    if(!agencyId){
        return 
    }
    const { departure, departureTime, arrival, arrivalTime, adult_price, child_price } = await req.json()

    
    const trips = await prisma.trip.findMany({
        where: {
            agencyId
        }
    })

    const ifExists = trips.find((trip) => (
        trip.departure == departure && 
        trip.arrival == arrival &&
        trip.departureTime == departureTime &&
        trip.arrivalTime == arrivalTime &&
        trip.adult_price == adult_price && 
        trip.child_price == child_price
    ))

    if(ifExists){
        return NextResponse.json( "Cette destination existe déjà", {status: 400})
    }
    
    const add = await prisma.trip.create({
        data: {
            agencyId, departure, departureTime, arrival, arrivalTime, adult_price, child_price
        }
    })

    if(!add){
        return
    }
    
    return NextResponse.json("Destination ajoutée avec succès", {status: 200})
}

export async function DELETE(req: NextRequest){
    const agencyId = req.nextUrl.searchParams.get("agencyId")
    const id = req.nextUrl.searchParams.get("id")

    if(!agencyId || !id){
        return 
    }

    const ifExists = await prisma.trip.findUnique({
        where: {
            agencyId, id
        }
    })

    if(!ifExists){
        return NextResponse.json({msg: "Destination non repertoriée"}, {status: 400})
    }

    const delTrip = await prisma.trip.delete({
        where: {
            agencyId, id
        }
    })
    
    if(!delTrip){
        return 
    }

    return NextResponse.json({msg: "Destination supprimée avec succès"}, {status: 200})
    
}