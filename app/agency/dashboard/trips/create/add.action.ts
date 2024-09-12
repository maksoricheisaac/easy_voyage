"use server"

import { PrismaClient } from "@prisma/client"


type TripType = {
    departure: string
    departureTime: string
    arrival: string
    arrivalTime: string
    adult_price: number
    child_price: number
}

const prisma = new PrismaClient()

export const addAction = async(values: TripType, agencyId: string) => {
    const { departure, departureTime, arrival, arrivalTime, adult_price, child_price} = values
    
    const add = await prisma.trip.create({
        data: {
            agencyId, departure,departureTime, arrival, arrivalTime, adult_price, child_price
        }
    })

    if(!add){
        console.log("Erreur")
        return 402
    }

    console.log("Ajout réussi")
    return 201
}