import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest){
    const data = await req.json()

    const newMessage = await prisma.message.create({
        data
    })


    if(!newMessage) {
        return NextResponse.json({msg: "Veuillez réessayer ultérieurement"}, {status: 400})
    }

    return NextResponse.json({msg: "Message envoyé avec succès"}, {status: 200})
}