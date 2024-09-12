import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")

    if(id){
        const agencyAdmin = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if(!agencyAdmin){
            return NextResponse.json({msg: "Administrateur non identifé"}, {status: 400})
        }

        return NextResponse.json({agencyAdmin}, {status: 200})
    }

    const agencyAdmins = await prisma.user.findMany({
        where: {
            role: "AGENCY_ADMIN" 
        }
    })

    return NextResponse.json({agencyAdmins}, {status: 200})
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
            return NextResponse.json({msg: "Administrateur non identifé"}, {status: 400})
        }

        await prisma.user.delete({
            where: {
                id
            }
        })

        return NextResponse.json({msg: "Administrateur supprimé avec succès"}, {status: 200})
    }
}