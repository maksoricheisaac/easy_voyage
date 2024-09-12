import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const message = await prisma.message.findUnique({
            where: {
                id
            }
        })

        if(!message){
            return NextResponse.json({msg: "Message non repertorié"}, {status: 400})
        }

        return NextResponse.json({message}, {status: 200})
    }

    const messages = await prisma.message.findMany()

    return NextResponse.json({messages}, {status: 200})
}

export async function DELETE(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const verify = await prisma.message.findUnique({
            where: {
                id
            }
        })

        if(!verify){
            return NextResponse.json({msg: "Message non repertorié"}, {status: 400})
        }

        await prisma.message.delete({
            where: {
                id
            }
        })

        return NextResponse.json({msg: "Message supprimé avec succès"}, {status: 200})
    }
}