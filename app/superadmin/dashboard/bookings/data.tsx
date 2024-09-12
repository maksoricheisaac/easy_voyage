"use client"

import { $Enums } from "@prisma/client";
import { useEffect, useState } from "react"

type BookingType = {
    id: string;
    userId: string;
    agencyId: string;
    tripId: string;
    status: $Enums.BookingStatus;
    createdAt: Date;
    updatedAt: Date;
}

export const Data = () => {
    const [bookings, setBookings] = useState<BookingType[]>()

    useEffect(() => {
        const getData = async() => {
            const data = await(await fetch("http://localhost:3000/api/superadmin/bookings")).json()

            setBookings(data.bookings)
        }

        getData()
    }, [])

    console.log("Bookings", bookings)

    return (
        <section>

        </section>
    )
}