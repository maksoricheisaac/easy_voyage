import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(!id){
        return
    }

    const nbrTickets = await prisma.ticket.findMany({
        where: {
            userId: id
        }
    })

    const nbrBookings = await prisma.booking.findMany({
        where: {
            userId: id
        }
    })

    const data = await prisma.ticket.findMany({
        where: {
            userId: id
        },
        include: {
            trip: {
                select: {
                    adult_price: true,
                    child_price: true
                }
            }
        }
    })

    return NextResponse.json({nbrBookings, nbrTickets, data}, {status: 200})
}




// export async function POST(req: NextRequest){
//     const data = await req.json()
    
//     const newUser = await prisma.user.create({
//         data
//     })

//     return NextResponse.json({newUser}, {status: 200})
// }