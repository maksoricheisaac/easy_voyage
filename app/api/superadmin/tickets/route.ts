import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const ticket = await prisma.ticket.findUnique({
            where: {
                id
            }
        })

        if(!ticket){
            return NextResponse.json({msg: "Billet non repertorié"}, {status: 400})
        }

        return NextResponse.json({ticket}, {status: 200})
    }

    const tickets = await prisma.ticket.findMany()

    return NextResponse.json({tickets}, {status: 200})
}

export async function DELETE(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const verify = await prisma.ticket.findUnique({
            where: {
                id
            }
        })

        if(!verify){
            return NextResponse.json({msg: "Billet non repertorié"}, {status: 400})
        }

        await prisma.ticket.delete({
            where: {
                id
            }
        })

        return NextResponse.json({msg: "Billet supprimé avec succès"}, {status: 200})
    }
}