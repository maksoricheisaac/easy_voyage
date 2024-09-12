"use client"

import { $Enums } from "@prisma/client";
import { useEffect, useState } from "react"


type TicketType = {
    id: string;
    userId: string;
    agencyId: string;
    tripId: string;
    status: $Enums.BookingStatus;
    createdAt: Date;
    updatedAt: Date;
}

export const Data = () => {
    const [tickets, setTickets] = useState<TicketType[]>()

    useEffect(() => {
        const getData = async() => {
            const data = await (await fetch("http://localhost:3000/api/superadmin/tickets")).json()

            setTickets(data.tickets)
        }
        getData()
    }, [])

    console.log("Tickets", tickets)


    return (
        <section></section>
    )
}