import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest){
    const id = req.nextUrl.searchParams.get("id")
    
    if(id){
        const agency = await prisma.agency.findUnique({
            where: {
                id
            }
        })

        if(!agency){
            return NextResponse.json({msg: "Agence non repertoriée"}, {status: 400})
        }

        return NextResponse.json({agency}, {status: 200})


    }
    const agencies = await prisma.agency.findMany()
    
    return NextResponse.json({agencies}, {status: 200})
}

export async function POST(req: NextRequest){
    const data = await req.json()

    const verify = await prisma.agency.findUnique({
        where: {
            email: data.email,
        }
    })

    if(verify){
        return NextResponse.json({msg: "Cette agence existe déjà"}, {status: 400})
    }

    const newAgency = await prisma.agency.create({
        data: data
    })

    console.log(newAgency)

    if(!newAgency){
        return NextResponse.json({msg: "Veuillez réessayer plus tard"}, {status: 400})
    }

    return NextResponse.json({msg: "Nouvelle agence ajoutée"}, {status: 200})
}

export async function PATCH(req: NextRequest){
    const data = await req.json()
    const id = req.nextUrl.searchParams.get("id")
    
    if(id){
        const verify = await prisma.agency.findUnique({
            where: {
                id
            }
        })

        if(!verify){
            return NextResponse.json({ msg: "Agence non repertoriée",}, {status: 400})
        }
        
        const agency = await prisma.agency.update({
            where: {
                id
            },
            data: data
        })

        return NextResponse.json({ msg: "Informations mises à jour", agency}, {status: 200})


    }

    return
}

export async function DELETE(req: NextRequest){
    const data = await req.json()
    const id = req.nextUrl.searchParams.get("id")
    
    if(id){

        const verify = await prisma.agency.findUnique({
            where: {
                id
            }
        })

        if(!verify){
            return NextResponse.json({ msg: "Agence non repertoriée",}, {status: 400})
        }

        await prisma.agency.delete({
            where: {
                id
            }
        })

        return NextResponse.json({ msg: "Agence supprimée avec succès",}, {status: 200})


    }

    return
}


