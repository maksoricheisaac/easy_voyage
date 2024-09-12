import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const test = await prisma.ticket.findMany({
        include: {
            trip: {
                select: {
                    adult_price: true,
                    child_price: true
                }
            }
        }
    })

    return NextResponse.json({test}, {status: 200})
}