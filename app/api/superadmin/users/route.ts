import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if(!user){
            return NextResponse.json({msg: "Utillisateur non identifé"}, {status: 400})
        }

        return NextResponse.json({user}, {status: 200})
    }

    const users = await prisma.user.findMany({
        where: {
            role: "USER" 
        }
    })

    return NextResponse.json({users}, {status: 200})
}

export async function DELETE(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const verify = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if(!verify){
            return NextResponse.json({msg: "Utillisateur non identifé"}, {status: 400})
        }

        await prisma.user.delete({
            where: {
                id
            }
        })

        return NextResponse.json({msg: "Utilisateur supprimé avec succès"}, {status: 200})
    }
}