"use client"

import { $Enums } from "@prisma/client";
import { useEffect, useState } from "react"

type AgencyAdminsType=  {
    id: string;
    email: string;
    password: string;
    lastname: string | null;
    firstname: string | null;
    phoneNumber: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
} 

export const Data = () => {
    const [agencyAdmins, setAgencyAdmins] = useState<AgencyAdminsType[]>()

    useEffect(() => {
        const getData = async() => {
            const data = await (await fetch("http://localhost:3000/api/superadmin/agency-admins")).json()
            setAgencyAdmins(data.agencyAdmins)
        }
        getData()
    }, [])

    console.log("agencyAdmins : ", agencyAdmins)

    return (
        <section>

        </section>
    )
}